import { $, $$ } from './helpers';

document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = $<HTMLDivElement>('#loadingOverlay');
    const progressBar = $<HTMLDivElement>('#progressBar');
    const loadingText = $<HTMLDivElement>('#loadingText');

    let loadedAssets = 0;
    let totalAssets = 0;

    // Count all assets that need to be loaded
    const images = Array.from(document.images);

    totalAssets = images.length;

    // Track loading of images
    images.forEach(img => {
        if (img.complete) {
            assetLoaded();
        } else {
            img.addEventListener('load', assetLoaded);
            img.addEventListener('error', assetLoaded);
        }
    });

    // Function to update progress when an asset is loaded
    function assetLoaded() {
        loadedAssets++;
        const progress = Math.min((loadedAssets / totalAssets) * 100, 100);
        updateProgress(progress);

        // When all assets are loaded, hide the overlay
        if (loadedAssets >= totalAssets) {
            setTimeout(hideLoadingOverlay, 500);
        }
    }

    // If there are no assets or very few, show minimal loading time
    if (totalAssets < 20) {
        simulateLoading();
        return;
    }

    // Simulate loading progress for sites with few assets
    function simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 20;
            updateProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(hideLoadingOverlay, 500);
            }
        }, 100);
    }

    // Update the progress bar and text
    function updateProgress(progress: number) {
        const roundedProgress = Math.round(progress);
        progressBar.style.width = roundedProgress + '%';
        loadingText.textContent = `Loading... ${roundedProgress}%`;
    }

    // Hide the loading overlay
    function hideLoadingOverlay() {
        loadingOverlay?.classList.add('hidden');
        // Remove overlay from DOM after animation completes
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }, 500);
    }

    // Ensure loading screen is hidden even if something goes wrong
    window.addEventListener('load', function () {
        setTimeout(hideLoadingOverlay, 2000);
    });
});