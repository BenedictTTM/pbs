"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Publication {
    id: number;
    title: string;
    year: string;
    journal: string;
    category: "Journal" | "Conference" | "Book Chapter";
    size: "small" | "large";
}

const publications: Publication[] = [
    {
        id: 1,
        title: "Ethical Constraints in Autonomous Decision Making Systems",
        year: "2024",
        journal: "Journal of Artificial Intelligence Research",
        category: "Journal",
        size: "large",
    },
    {
        id: 2,
        title: "Distributed Ledger Technologies for Academic Credentialing",
        year: "2023",
        journal: "IEEE Transactions on Services Computing",
        category: "Journal",
        size: "small",
    },
    {
        id: 3,
        title: "Optimizing Neural Networks for Low-Power Edge Devices",
        year: "2023",
        journal: "International Conference on Edge Computing",
        category: "Conference",
        size: "small",
    },
    {
        id: 4,
        title: "The Silent Interface: Minimizing Cognitive Load in Educational Software",
        year: "2022",
        journal: "Human-Computer Interaction",
        category: "Journal",
        size: "large",
    },
];

export default function Research() {
    return (
        <section id="research" className="min-h-screen py-24 px-6 md:px-24 bg-pbs-background">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-pbs-border pb-6">
                <h2 className="font-serif text-3xl md:text-5xl text-pbs-text-primary">Selected Research</h2>
                <span className="font-sans text-sm text-pbs-text-muted mt-4 md:mt-0">2018 — Present</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {publications.map((pub) => (
                    <div
                        key={pub.id}
                        className={`group relative border border-pbs-border bg-pbs-surface p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-pbs-accent-light hover:border-pbs-accent/20 ${pub.size === "large" ? "md:col-span-2" : "md:col-span-1"
                            }`}
                    >
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="w-6 h-6 text-pbs-accent" />
                        </div>

                        <div className="mt-auto">
                            <span className="text-xs font-mono text-pbs-accent mb-2 block">{pub.category} // {pub.year}</span>
                            <h3 className="font-serif text-2xl text-pbs-text-primary group-hover:text-pbs-accent transition-colors duration-300">
                                {pub.title}
                            </h3>
                            <p className="font-sans text-sm text-pbs-text-muted mt-2">
                                {pub.journal}
                            </p>
                        </div>

                        <div className="absolute inset-0 bg-pbs-accent/0 group-hover:bg-pbs-accent-[0.02] pointer-events-none transition-colors duration-300" />
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a href="#" className="inline-block text-pbs-text-primary hover:text-pbs-accent border-b border-transparent hover:border-pbs-accent transition-all duration-300 pb-1 text-sm tracking-widest uppercase">
                    View Complete Bibliography
                </a>
            </div>
        </section>
    );
}
