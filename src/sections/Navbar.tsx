"use client";
import LogoImage from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl ">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur-sm">
                        <div className="grid grid-cols-2 lg:grid-cols-3  px-4 p-2 items-center">
                            <div>
                                <Link href={"/"}>
                                    <Image
                                        className="h-9 w-auto ml-2"
                                        src={LogoImage}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>
                                <Link href={"/login"}>
                                    <button className="border border-white h-12 rounded-full px-6 font-medium hidden md:inline-flex items-center">
                                        Log in
                                    </button>
                                </Link>
                                <Link href={"/signup"}>
                                    <button className="border text-black h-12 rounded-full px-6 font-medium bg-lime-400 border-lime-400 hidden md:inline-flex items-center">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className=" overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="py-2"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Link href={"/login"}>
                                            <Button className="border border-white h-12 rounded-full px-6 font-medium items-center">
                                                Log in
                                            </Button>
                                        </Link>
                                        <Link href={"/signup"}>
                                            <Button className="border text-black h-12 rounded-full px-6 font-medium bg-lime-400 border-lime-400">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="py-14"></div>
        </>
    );
}
