"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
    const scrolltarget = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrolltarget,
        offset: ["start end", "end end"],
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });
    const [currentWord, setcurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setcurrentWord(latest);
        });
    }, [wordIndex]);
    return (
        <section className="py-28">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
                            ✦ Introducing Layers
                        </div>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That&apos;s why we built layers.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]"></div>
            </div>
        </section>
    );
}
