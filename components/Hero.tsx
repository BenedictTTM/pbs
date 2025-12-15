"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gentle parallax for background (slower scroll)
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text fade out on scroll
            gsap.to(textRef.current, {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "center top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[140vh] w-full overflow-hidden flex flex-col items-center justify-center bg-pbs-background"
        >
            {/* Background with Parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/images/hero-abstract.jpg')", // Placeholder, will need to be replaced or provided
                    // Fallback solid color or pattern if image missing
                    backgroundColor: "#FAFAFA"
                }}
            />

            {/* Abstract geometric hint if no image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-pbs-accent-light)_0%,_transparent_70%)] opacity-40 pointer-events-none" />

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
                <h1 className="font-serif text-5xl md:text-7xl font-light text-pbs-text-primary tracking-tight">
                    Prince Boakye-Sekyerehene
                </h1>
                <div className="w-16 h-[1px] bg-pbs-accent opacity-50" />
                <h2 className="font-sans text-xl md:text-2xl text-pbs-text-muted font-normal">
                    Lecturer, Department of Computer Science<br />
                    University of Ghana
                </h2>
                <p className="font-sans text-lg text-pbs-text-muted/80 max-w-2xl mt-4 leading-relaxed">
                    Specializing in intelligent systems, emerging technologies, and the quiet architecture of digital knowledge.
                </p>
            </div>

            {/* CTA */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                <a
                    href="#about"
                    className="group flex flex-col items-center gap-2 text-sm text-pbs-text-muted hover:text-pbs-accent transition-colors duration-300"
                >
                    <span className="tracking-widest uppercase text-[10px]">Explore</span>
                    <MoveDown className="w-4 h-4 animate-bounce opacity-50 group-hover:opacity-100" />
                </a>
            </div>
        </section>
    );
}
