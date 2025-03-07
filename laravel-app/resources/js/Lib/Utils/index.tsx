import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast, Flip, Id } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export class Toast {
    public toastId: Id;
    constructor(message?: string) {
        this.toastId = toast.loading(message ?? "Please wait...", {
            position: "bottom-right",
            closeButton: true,
            draggable: true,
            hideProgressBar: true,
            transition: Flip,
        });
    }

    public success(message: string) {
        toast.update(this.toastId, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
            transition: Flip,
        });
    }

    public error(message: string) {
        toast.update(this.toastId, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
            transition: Flip,
        });
    }

    public warning(message: string) {
        toast.update(this.toastId, {
            render: message,
            type: "warning",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
            transition: Flip,
        });
    }

    public loading(message: string) {
        toast.update(this.toastId, {
            render: message,
            isLoading: true,
            autoClose: false,
            hideProgressBar: true,
            transition: Flip,
        });
    }
}
