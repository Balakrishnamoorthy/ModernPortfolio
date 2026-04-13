"use client";

import Image from "next/image";

const feedbacks = [
    {
        id: 1,
        content: "Balakrishnamoorthy has a rare ability to translate complex requirements into clean, performant interfaces. His code is as thoughtful as his design sensibility — a truly reliable engineer to work with.",
        name: "Ramesh Kumar",
        role: "Senior Software Engineer",
        company: "HEXCODEX",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 2,
        content: "Bala is one of those developers who just gets it. He picks up context fast, writes maintainable code, and always delivers on time. Working alongside him was effortless.",
        name: "SasiKumar",
        role: "Software Engineer",
        company: "Tata Consultancy Services",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 3,
        content: "As a fellow frontend developer at Haiku Technologies, I've seen Bala's work up close. He brings precision and user empathy to every component he builds — the kind of engineer who raises the bar for the whole team.",
        name: "Haridharasaran",
        role: "Frontend Developer",
        company: "Haiku Technologies",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 4,
        content: "Balakrishnamoorthy bridges the gap between design and engineering beautifully. He collaborated seamlessly across the full stack and always kept the end-user experience at the center of every decision.",
        name: "Aravindar",
        role: "Full Stack Developer",
        company: "Cognizant",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 5,
        content: "Bala built out the frontend for our video platform and the attention to detail was outstanding — smooth interactions, clean UI, and zero complaints from our users. Exactly what we needed.",
        name: "Ajith",
        role: "Video Editor",
        company: "Fahhub",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 6,
        content: "From a marketing lens, Bala's interfaces just convert. The landing pages and dashboards he crafted for us were visually compelling and optimized for engagement. He understands the product beyond just code.",
        name: "Santhosh",
        role: "Digital Marketer",
        company: "Fahhub",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        id: 7,
        content: "We needed a tech partner who could think like a founder — Balakrishnamoorthy delivered exactly that. He built our platform with scalability in mind and made the whole experience feel premium from day one.",
        name: "Saravankumar",
        role: "Founder",
        company: "HariHari Bags",
        avatar: "/assets/images/lovable.jpg",
        linkedin: "https://linkedin.com"
    }
];

const FeedbackCard = ({ feedback }: { feedback: typeof feedbacks[0] }) => (
    <div className="flex-shrink-0 w-[400px] h-[300px] p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            &quot;{feedback.content}&quot;
        </p>

        <div className="flex items-center gap-4 mt-auto">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                    src={feedback.avatar}
                    alt={feedback.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-lg dark:text-white">
                        {feedback.name}
                    </h4>
                </div>
                <p className="text-sm text-gray-500">
                    {feedback.role} @ {feedback.company}
                </p>
            </div>
        </div>
    </div>
);

const Feedback = () => {
    return (
        <main className="px-3 md:px-8 pb-32 pt-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl mb-16 primary-font text-center">Feedback from teammates & collaborators</h1>

                <div className="relative overflow-hidden">
                    {/* Left Fade Gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />

                    {/* Right Fade Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                    <div className="flex animate-marquee gap-8">
                        {/* First set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`first-${feedback.id}`} feedback={feedback} />
                        ))}

                        {/* Duplicate set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`second-${feedback.id}`} feedback={feedback} />
                        ))}

                        {/* Third set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`third-${feedback.id}`} feedback={feedback} />
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
                        transform: translateX(-220%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 15s linear infinite;
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
        </main>
    );
};

export default Feedback;