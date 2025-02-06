import { PortfolioProvider } from "@/features/portfolio/contexts/portfolio-context";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import { cn, Toast } from "@/lib/utils";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, ReactNode } from "react";
import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });

    const subscribe: FormEventHandler = (e) => {
        e.preventDefault();

        const toast = new Toast("Subscribing...");

        post(route("newsletter.store"), {
            onSuccess: () => {
                toast.success("Thank you for subscribing.");
                reset();
            },
            onError: () => {
                toast.error("Failed to subscribe. Please try again.");
            },
        });
    };

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <div>
                {/* <!-- Header --> */}
                <div className="text-center p-10 bg-gray-10 dark:bg-gray-800">
                    <h2 className="text-3xl">
                        A Blog About Software Development And Life
                    </h2>
                    <p className="mt-1">
                        Welcome to my blog. Subscribe and get my latest blog
                        post in your inbox.
                    </p>

                    <form
                        onSubmit={subscribe}
                        className="mt-10 flex gap-1 justify-center items-start"
                    >
                        <div>
                            <input
                                type="email"
                                name="email"
                                className={cn(
                                    "px-3 py-2 border border-primary rounded w-72",
                                    {
                                        "border-red-500": errors.email,
                                    }
                                )}
                                placeholder="Enter Email"
                                value={data.email}
                                required
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm text-left mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="px-5 py-2 rounded inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                            disabled={processing}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* <!-- Main Content --> */}
                <div className="p-10">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
                        <div
                            v-for="item in 6"
                            className="bg-gray-10 dark:bg-gray-800 transition-colors duration-300"
                        >
                            <div>
                                <img
                                    src="/images/blog-post-thumb-card-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl">
                                    Top 3 JavaScript Frameworks
                                </h3>
                                <p className="mb-5 mt-3 text-sm">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient...
                                </p>

                                <button className="text-primary flex items-center">
                                    <span>Read More</span>
                                    {/* <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" class="ml-2"></font-awesome-icon> */}
                                    <FaLongArrowAltRight className="ml-2" />
                                </button>

                                <p className="mt-8 text-xs text-gray-500">
                                    Published 2 days ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-14">
                        <Link
                            className="px-5 py-2 rounded inline-flex items-center text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                            href="/blog"
                        >
                            {/* <font-awesome-icon class="mr-2" :icon="['fas', 'arrow-circle-right']"></font-awesome-icon> View More */}
                            <FaArrowCircleRight className="mr-2" />
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Blog.layout = (page: ReactNode) => (
    <PortfolioProvider>
        <PortfolioLayout>{page}</PortfolioLayout>
    </PortfolioProvider>
);

export default Blog;
