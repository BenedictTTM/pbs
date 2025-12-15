"use client";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-pbs-surface overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[500px] md:h-[500px] bg-pbs-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-pbs-text-primary mb-4">Inquiries</h2>
                    <p className="text-pbs-text-muted font-sans font-light">
                        Available for academic collaboration and select consultation.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 pt-8">
                    <div className="text-center">
                        <h3 className="text-sm uppercase tracking-widest text-pbs-text-muted mb-2">Office Email</h3>
                        <a
                            href="mailto:pboakye-sekyerehene@ug.edu.gh"
                            className="font-serif text-2xl md:text-3xl text-pbs-text-primary hover:text-pbs-accent transition-colors duration-300 border-b border-transparent hover:border-pbs-accent"
                        >
                            pboakye-sekyerehene@ug.edu.gh
                        </a>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-6 w-full text-center">
                <p className="text-[10px] text-pbs-text-muted uppercase tracking-widest opacity-50">
                    © 2025 Prince Boakye-Sekyerehene
                </p>
            </footer>
        </section>
    );
}
