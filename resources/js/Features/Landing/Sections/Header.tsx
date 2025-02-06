import { Button } from "@/Components/Shared/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/Shared/DropdownMenu";
import { Link } from "@inertiajs/react";
import { BiMessageAltDetail } from "react-icons/bi";
import {
    FaChevronDown,
    FaGithub,
    FaRegBell,
    FaXTwitter,
} from "react-icons/fa6";

const Header = () => {
    return (
        <header className="bg-white fixed top-0 left-0 w-full">
            <div className="container items-center py-4">
                <div className="flex">
                    <div className="flex-1">
                        <Link href="/">
                            <img
                                src="/images/hasib-dev.svg"
                                alt="Hasib.dev"
                                width={150}
                            />
                        </Link>
                    </div>
                    <div className="flex-1 flex gap-1.5 items-center justify-end">
                        {/* <Link href="/portfolio">
                            <Button size="sm">PORTFOLIO</Button>
                        </Link> */}
                        <a href="/blog">
                            <Button variant="secondary" size="sm">
                                Blog
                            </Button>
                        </a>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="gray" size="sm">
                                    <FaChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                sideOffset={13}
                                className="w-48 font-semibold text-gray-600"
                            >
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer"
                                    >
                                        <a href="mailto:info@hasib.dev">
                                            <BiMessageAltDetail />
                                            LEAVE FEEDBACK
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer"
                                    >
                                        <Link href="/changelog">
                                            <FaRegBell />
                                            CHANGELOG
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer"
                                    >
                                        <a
                                            href="http://github.com/hasib-devs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            GITHUB
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer"
                                    >
                                        <a
                                            href="http://twitter.com/Hasibur40252192"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaXTwitter />
                                            TWITTER
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
