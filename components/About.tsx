"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="min-h-screen w-full flex flex-col lg:flex-row bg-pbs-background border-t border-pbs-border">
            {/* Left Column: Content */}
            <div className="w-full lg:w-3/5 p-12 lg:p-24 flex flex-col">
                <div className="max-w-2xl space-y-16">

                    {/* Biography */}
                    <div>
                        <span className="font-serif text-pbs-accent text-sm tracking-widest uppercase mb-6 block">Biography</span>
                        <div className="space-y-6 font-sans text-lg text-pbs-text-muted leading-relaxed font-light">
                            <p>
                                Dr. P. Boakye-Sekyerehene (PBS) is a Lecturer in the Department of Computer Science at the University of Ghana. He earned his PhD in Computer Science in 2024, focusing on the development of a swarm intelligence-based vehicle platoon formation algorithm for autonomous vehicles in VANETs to enhance traffic flow management.
                            </p>
                            <p>
                                With a strong passion for education and technology, PBS has been instrumental in integrating AI tools into academic administration and instruction. He has led numerous training sessions for university administrators and created comprehensive handouts to facilitate their effective use.
                            </p>
                            <p>
                                Beyond the classroom, he mentors students in research projects ranging from predicting rice yield using machine learning to developing smart city solutions leveraging IoT and Embedded Systems.
                            </p>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div>
                        <span className="font-serif text-pbs-accent text-sm tracking-widest uppercase mb-6 block">Teaching Philosophy</span>
                        <blockquote className="font-serif text-2xl text-pbs-text-primary mb-6 leading-tight border-l-2 border-pbs-accent pl-6 italic">
                            "To create an inclusive and dynamic classroom environment where students are encouraged to explore, innovate, and apply knowledge to real-world problems."
                        </blockquote>
                        <p className="font-sans text-lg text-pbs-text-muted leading-relaxed font-light">
                            I believe in a student-centered approach, emphasizing practical applications and hands-on learning. My aim is to inspire the next generation of computer scientists to push technological boundaries and make meaningful contributions to society.
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <span className="font-serif text-pbs-accent text-sm tracking-widest uppercase mb-6 block">Education</span>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-pbs-border pb-2 group hover:border-pbs-accent transition-colors duration-300">
                                <span className="font-serif text-xl text-pbs-text-primary group-hover:text-pbs-accent transition-colors">PhD in Computer Science</span>
                                <span className="font-mono text-sm text-pbs-text-muted">2024</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-pbs-border pb-2 group hover:border-pbs-accent transition-colors duration-300">
                                <span className="font-serif text-xl text-pbs-text-primary group-hover:text-pbs-accent transition-colors">MEng in Computer Engineering</span>
                                <span className="font-mono text-sm text-pbs-text-muted">2014</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-pbs-border pb-2 group hover:border-pbs-accent transition-colors duration-300">
                                <span className="font-serif text-xl text-pbs-text-primary group-hover:text-pbs-accent transition-colors">BSc in Mathematics & Computer Science</span>
                                <span className="font-mono text-sm text-pbs-text-muted">2010</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Column: Imagery */}
            <div className="w-full lg:w-2/5 h-[50vh] lg:h-auto sticky top-0 bg-pbs-surface border-l border-pbs-border overflow-hidden">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                    <div className="absolute inset-0 bg-pbs-surface flex items-center justify-center text-pbs-text-muted/20">
                        <Image
                            src="/pbs.png"
                            alt="Dr. P. Boakye-Sekyerehene"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
