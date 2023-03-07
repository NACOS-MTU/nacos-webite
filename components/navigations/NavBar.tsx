import React from "react";
import Image from "next/image";
import logo_trans from "../../public/logo.svg";

import Link from "next/link";
import { useRouter } from "next/router";

const MainNav = () => {
    const router = useRouter();

    const [mobileClicked, setMobileClicked] = React.useState(false);

    return (
        <>
            <nav className="shadow-md">
                <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-2 mx-auto">
                    <Link href="/" passHref>
                        <div className="w-16 h-16">
                            <Image src={logo_trans} alt="logo" />
                        </div>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:inline-flex md:space-x-6 lg:space-x-10 md:items-center">
                        <div className="flex md:space-x-4 lg:space-x-6">
                            <Link href="/" passHref>
                                <p className="cursor-pointer py-2 px-4 ring-2 rounded-sm ring-primary hover:ring-secondary">Home</p>
                            </Link>
                            <Link href="/hackathon" passHref>
                                <p className="cursor-pointer py-2 px-4 bg-primary hover:bg-secondary text-white rounded-sm ring-2 ring-primary hover:ring-secondary">2023 Hackathon</p>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Nav Text */}
                    <Link href="/" passHref>
                        <h1 className="font-WorkSans md:hidden text-xl hover:text-secondary font-bold tracking-wider text-primary">NACOS</h1>
                    </Link>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileClicked(!mobileClicked)} className="mobile-menu-button">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Links */}
                <div className={mobileClicked ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Home</p>
                        </Link>
                    </a>
                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/hackathon" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Hackathon</p>
                        </Link>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default MainNav;
