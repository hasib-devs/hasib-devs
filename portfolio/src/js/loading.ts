import { $ } from './helpers';

document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = $<HTMLDivElement>('#loadingOverlay');
    const progressBar = $<HTMLDivElement>('#progressBar');
    const loadingText = $<HTMLDivElement>('#loadingText');

    let loadedAssets = 0;
    let totalAssets = 0;

    // Count all assets that need to be loaded
    const images = Array.from(document.images);

    totalAssets = images.length;

    // If there are no assets or very few, show minimal loading time
    if (totalAssets < 10) {
        simulateLoading();
        return;
    }

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

        console.log({ totalAssets, loadedAssets });
        const progress = Math.min((loadedAssets / totalAssets) * 100, 100);
        updateProgress(progress);

        // When all assets are loaded, hide the overlay
        if (loadedAssets >= totalAssets) {
            setTimeout(hideLoadingOverlay, 500);
        }
    }

    // Simulate loading progress for sites with few assets
    function simulateLoading() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 50;
            updateProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(hideLoadingOverlay, 100);
            }
        }, 50);
    }

    // Update the progress bar and text
    function updateProgress(progress: number) {
        // console.log({ progress });
        const roundedProgress = Math.round(progress >= 100 ? 100 : progress);
        progressBar.style.width = roundedProgress + '%';
        loadingText.textContent = `Loading... ${roundedProgress}%`;
    }

    // Hide the loading overlay
    function hideLoadingOverlay() {
        updateProgress(100);
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
        setTimeout(hideLoadingOverlay, 1000);
    });
});