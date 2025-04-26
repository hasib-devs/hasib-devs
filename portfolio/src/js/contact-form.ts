import { $ } from "./helpers";

const formEl = $<HTMLFormElement>("#contact_form");

formEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = (e.target as HTMLFormElement);

    const formData = new FormData(form);
    // const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    // submitBtn.disabled = true;
    const api_url = import.meta.env.PROD ? "https://api-worker.hasib-webdev.workers.dev" : "http://localhost:8787";
    const url = `${api_url}/api/contact`;

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(await response.text());
        };

        console.log("Form submited successfully", await response.json());
        form.reset();

    } catch (error) {
        console.log("Failed to summit contact form.", error);
    }
});