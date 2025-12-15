"use client";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-pbs-surface overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pbs-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-pbs-text-primary mb-4">Inquiries</h2>
                    <p className="text-pbs-text-muted font-sans font-light">
                        Available for academic collaboration and select consultation.
                    </p>
                </div>

                <form className="space-y-12">
                    <div className="group relative">
                        <input
                            type="text"
                            id="name"
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-pbs-border py-2 text-pbs-text-primary focus:outline-none focus:border-pbs-accent transition-colors duration-300"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 top-2 text-pbs-text-muted transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-pbs-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
                        >
                            Name
                        </label>
                    </div>

                    <div className="group relative">
                        <input
                            type="email"
                            id="email"
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-pbs-border py-2 text-pbs-text-primary focus:outline-none focus:border-pbs-accent transition-colors duration-300"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 top-2 text-pbs-text-muted transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-pbs-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
                        >
                            Email
                        </label>
                    </div>

                    <div className="group relative">
                        <textarea
                            id="message"
                            rows={1}
                            placeholder=" "
                            className="peer w-full bg-transparent border-b border-pbs-border py-2 text-pbs-text-primary focus:outline-none focus:border-pbs-accent transition-colors duration-300 resize-none min-h-[40px]"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-2 text-pbs-text-muted transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-pbs-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
                        >
                            Message
                        </label>
                    </div>

                    <div className="text-center pt-8">
                        <button
                            type="button" // Prevent actual submit for demo
                            className="group relative inline-flex items-center justify-center px-12 py-3 overflow-hidden font-sans font-medium tracking-widest text-white uppercase bg-pbs-accent transition duration-300 ease-out hover:bg-pbs-text-primary hover:shadow-lg"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                            <span className="relative">Send Inquriy</span>
                        </button>
                    </div>
                </form>
            </div>

            <footer className="absolute bottom-6 w-full text-center">
                <p className="text-[10px] text-pbs-text-muted uppercase tracking-widest opacity-50">
                    © 2025 Prince Boakye-Sekyerehene
                </p>
            </footer>
        </section>
    );
}
