"use client";
import Design1image from "@/assets/images/design-example-1.png";
import Design2image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import CursorImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [LeftDesignScope, LeftDesignAnimate] = useAnimate();
    const [LeftPointerScope, LeftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        LeftDesignAnimate([
            [LeftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [LeftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        LeftPointerAnimate([
            [LeftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [LeftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                LeftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);
    return (
        <section
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${CursorImage.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={LeftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-64 top-16 hidden lg:block"
                >
                    <Image draggable="false" src={Design1image} alt="" />
                </motion.div>
                <motion.div
                    ref={LeftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    drag
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute -right-72 -top-16 hidden lg:block"
                >
                    <Image src={Design2image} draggable="false" alt="" />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400  rounded-full text-neutral-950 font-semibold">
                        ✨ $5.7M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools should&apos;t slow you down. Layers combine
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <button
                        className="border text-black h-12 rounded-full px-6 font-medium bg-lime-400 border-lime-400 "
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
