export function $<T extends Element>(selector: string) {
    return document.querySelector<T>(selector)!;
}

export function $$<T extends Element>(selector: string) {
    return Array.from(document.querySelectorAll<T>(selector));
}