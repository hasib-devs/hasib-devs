import { $ } from "./helpers";

const formEl = $<HTMLFormElement>("#contact_form");

function hideLoadingOverlay(el: HTMLDivElement) {
    el.classList.add('hidden');
}
function showLoadingOverlay(el: HTMLDivElement) {
    el.classList.remove('hidden');
    el.classList.add('flex');
}

formEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = (e.target as HTMLFormElement);
    const loadingOverlay = form.querySelector<HTMLDivElement>('#loadingOverlay')!;
    const successOverlay = form.querySelector<HTMLDivElement>('#successOverlay')!;
    const failedOverlay = form.querySelector<HTMLDivElement>('#failedOverlay')!;

    successOverlay.addEventListener("click", function (e) {
        e.preventDefault();
        successOverlay.classList.remove('flex');
        successOverlay.classList.add('hidden');
    });

    const formData = new FormData(form);

    const api_url = import.meta.env.PROD ? "https://api-worker.hasib-webdev.workers.dev" : "http://localhost:8787";
    const url = `${api_url}/api/contact`;

    showLoadingOverlay(loadingOverlay);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData))
        });

        if (!response.ok) {
            throw new Error(await response.text());
        };

        console.log("Form submited successfully", await response.json());
        form.reset();

        showLoadingOverlay(successOverlay);
    } catch (error) {
        showLoadingOverlay(failedOverlay);
    } finally {
        hideLoadingOverlay(loadingOverlay);
    }
});