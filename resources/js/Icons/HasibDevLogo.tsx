import { FC, SVGProps } from "react";

type Props = {} & SVGProps<SVGSVGElement>;

const HasibDevLogo: FC<Props> = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 230 60"
            // width={200}
            height={35}
            {...props}
        >
            <text
                x="10"
                y="40"
                font-family="SF Pro Display, sans-serif"
                font-size="44"
                // fill="#0f172a"
                font-weight="900"
                letter-spacing="0"
                className="fill-current text-[#0f172a] dark:text-gray-200"
            >
                hasib
            </text>

            <text
                x="135"
                y="40"
                font-family="SF Pro Display, sans-serif"
                font-size="44"
                // fill="#2563eb"
                className="fill-current text-secondary-dark"
                font-weight="900"
            >
                .dev
            </text>

            <line
                x1="10"
                y1="50"
                x2="50"
                y2="50"
                // stroke="#2563eb"
                stroke-width="3"
                className="stroke-current text-secondary-dark"
            />
        </svg>
    );
};

export default HasibDevLogo;
