"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="min-h-screen w-full flex flex-col md:flex-row bg-pbs-background border-t border-pbs-border">
            {/* Left Column: Biography */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                <div className="max-w-xl">
                    <span className="font-serif text-pbs-accent text-sm tracking-widest uppercase mb-8 block">About</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-pbs-text-primary mb-12 leading-tight">
                        Bridging theoretical computer science with practical, human-centric application.
                    </h2>

                    <div className="space-y-8 font-sans text-lg md:text-xl text-pbs-text-muted leading-relaxed font-light">
                        <p>
                            As a Lecturer at the University of Ghana, my work is rooted in the belief that technology should serve as a calm, invisible enabler of human potential.
                        </p>
                        <p>
                            My research focuses on intelligent systems—exploring how algorithms can be designed with both efficiency and ethical restraint. I teach the next generation of technologists to value precision, clarity, and purpose in their code.
                        </p>
                        <p>
                            Beyond the lecture hall, I consult on digital transformation projects that require a steady hand and a deep understanding of complex systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column: Imagery */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-auto sticky top-0 bg-pbs-surface border-l border-pbs-border overflow-hidden">
                {/* Placeholder for professional headshot */}
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                    <div className="absolute inset-0 bg-pbs-surface flex items-center justify-center text-pbs-text-muted/20">
                        [Professional Portrait Placement]
                    </div>
                    {/* 
            <Image 
              src="/images/portrait.jpg" 
              alt="Prince Boakye-Sekyerehene"
              fill
              className="object-cover"
              priority
            />
            */}
                </div>
            </div>
        </section>
    );
}
