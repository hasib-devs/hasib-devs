import { PortfolioProvider } from "@/Features/Portfolio/Contexts/portfolio-context";
import DefaultLayout from "@/Features/Portfolio/Layouts/DefaultLayout";
import { cn, Toast } from "@/Lib/Utils";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaStackOverflow, FaTwitter } from "react-icons/fa6";

const Contact = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        name: "",
        message: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const toast = new Toast("Sending message...");
        post(route("portfolio.sendContact"), {
            onSuccess: () => {
                toast.success("Message sent successfully.");
                reset("message");
            },
            onError: (errors) => {
                toast.error("Failed to send message. Please try again.");
            },
        });
    };

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <div id="contact-section">
                {/* <!-- Header --> */}
                <div className="p-10 bg-gray-10 dark:bg-gray-800">
                    <div className="text-center">
                        <h2 className="text-3xl">Contact</h2>
                        <p className="my-3">
                            Interested in hiring me for your project or just
                            want to say hi? You can fill in the contact form
                            below <br /> or 'send' me an email to{" "}
                            <a
                                href="mailto:info@hasib.dev"
                                className="text-primary font-semibold"
                            >
                                info@hasib.dev
                            </a>
                        </p>

                        <p>
                            Want to get connected? Follow me on the social
                            channels below.
                        </p>
                    </div>

                    {/* <!-- Social Icons --> */}
                    <div className="flex justify-center items-center my-4">
                        <a
                            href="https://twitter.com/Hasibur40252192"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://www.facebook.com/Hasibur.Rahman.web"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hasibur"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://stackoverflow.com/users/16370387/hasibur-rahman"
                            target="_blank"
                            className="social-icon"
                        >
                            <FaStackOverflow />
                        </a>
                    </div>
                </div>

                {/* <!-- Main content --> */}
                <div className="p-10">
                    <h3 className="text-2xl mb-6 text-center">Get In Touch</h3>
                    <form onSubmit={submit} className="lg:w-3/5 mx-auto">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className={cn(
                                        "px-3 py-2 rounded w-full border border-gray-400",
                                        {
                                            "border-red-500": errors.name,
                                        }
                                    )}
                                    required
                                    autoFocus
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                {errors.name && (
                                    <p className="text-red-500 text-sm col-span-2 mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={cn(
                                        "px-3 py-2 rounded border w-full border-gray-400",
                                        {
                                            "border-red-500": errors.email,
                                        }
                                    )}
                                    required
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm col-span-2 mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <textarea
                                name="message"
                                cols={30}
                                rows={10}
                                className={cn(
                                    "px-3 py-2 rounded border w-full border-gray-400",
                                    {
                                        "border-red-500": errors.message,
                                    }
                                )}
                                placeholder="Enter Your message"
                                required
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            ></textarea>

                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="px-10 py-2 mt-5 font-semibold rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                            disabled={processing}
                        >
                            {processing ? `Sending...` : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

Contact.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <DefaultLayout>{page}</DefaultLayout>
    </PortfolioProvider>
);

export default Contact;
