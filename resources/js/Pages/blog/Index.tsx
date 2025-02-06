import BlogLayout from "@/layouts/BlogLayout";
import { ReactNode } from "react";

const Index = () => {
    return <div className="container">Index</div>;
};

export default Index;

Index.layout = (page: ReactNode) => <BlogLayout>{page}</BlogLayout>;
