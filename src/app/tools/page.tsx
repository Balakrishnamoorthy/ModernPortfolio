"use client";

import Image from "next/image";

const tools = [
    { id: 1, name: "VS Code", logo: "/assets/images/vscode.png" },
    { id: 2, name: "Git", logo: "/assets/images/git.png" },
    { id: 3, name: "GitHub", logo: "/assets/images/github.png" },
    { id: 4, name: "Antigravity", logo: "/assets/images/antigravity.png" },
    { id: 5, name: "Vite", logo: "/assets/images/vite.png" },
    { id: 6, name: "Playwright", logo: "/assets/images/playwright.png" },
    { id: 7, name: "Postman", logo: "/assets/images/postman.png" },
    { id: 8, name: "Insomnia", logo: "/assets/images/insomnia.png" },
    { id: 9, name: "Docker", logo: "/assets/images/docker.png" },
    { id: 10, name: "Figma", logo: "/assets/images/figma.png" },
    { id: 11, name: "Framer", logo: "/assets/images/framer.png" },
    { id: 12, name: "ChatGPT", logo: "/assets/images/ChatGPT.svg" },
    { id: 13, name: "Gemini", logo: "/assets/images/gemini.png" },
];

const Tools = () => {
    return (
        <div className="pt-24">
            <div className="max-w-7xl mx-auto">
                <p className="text-2xl mb-8 primary-font text-center font-semibold">Tools I ship with, daily.</p>

                {/* Auto-sliding Marquee */}
                <div className="relative overflow-hidden mt-16">
                    {/* Left Fade Gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />

                    {/* Right Fade Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                    <div className="flex animate-marquee gap-32">
                        {/* First set of logos */}
                        {tools.map((tool) => (
                            <div
                                key={`first-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {tools.map((tool) => (
                            <div
                                key={`second-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Third set for extra smoothness */}
                        {tools.map((tool) => (
                            <div
                                key={`third-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                
                @media (max-width: 768px) {
                    .animate-marquee {
                        animation-duration: 12s;
                    }
                }
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Tools;