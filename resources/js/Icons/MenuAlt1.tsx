import { FC, SVGProps } from "react";

type Props = {} & SVGProps<SVGSVGElement>;
const MenuAlt1: FC<Props> = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
            />
        </svg>
    );
};

export default MenuAlt1;
