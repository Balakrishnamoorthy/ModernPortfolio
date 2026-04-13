"use client";

import { Mail, FileText } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-32 pb-12">


            {/* Bottom Purple Gradient Blur */}

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
                {/* Get in touch Card */}
                <div className="bg-white backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[32px] p-12 text-center border-1 border-gray-200 relative overflow-hidden">
                    {/* Bottom Purple Gradient Blur */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-500/20 blur-[60px] rounded-t-full pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl mb-4 primary-font font-semibold">Get in touch</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
                            I'm always open to new opportunities, meaningful collaborations, and conversations with people building things that matter. If you're looking for a frontend engineer who cares about both craft and impact — let's talk.                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Contact Me Button */}
                            <a
                                href="mailto:balakrishnamoorthy77@gmail.com"
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-8 text-white"
                            >
                                <span className="mr-2">Contact me</span>
                                <Mail className="w-4 h-4" />
                            </a>

                            {/* Download Resume Button */}
                            <a
                                href="/assets/BKM_resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-black shadow-sm ring-1 ring-gray-200"
                            >
                                <span className="mr-2">Download resume</span>
                                <FileText className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>© 2026 Haiku Tech — Built with intention.</p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/balakrishnamoorthys/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            X (Twitter)
                        </a>
                        <a
                            href="mailto:balakrishnamoorthy77@gmail.com"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
