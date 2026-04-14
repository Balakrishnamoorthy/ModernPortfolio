"use client";

import { AnimatedFolder, Project } from "@/components/ui/animated-folder";


const landingPageProjects: Project[] = [
    {
        id: "1",
        title: "SJR Photography",
        image: "/assets/images/animated-folder-landing-page-1.png",
    },
    {
        id: "2",
        title: "Homework Hub",
        image: "/assets/images/animated-folder-landing-page-2.png",
    },
    {
        id: "3",
        title: "Vibe Route Tours and Travels",
        image: "/assets/images/animated-folder-landing-page-3.png",
    }
];

const websiteDesignProjects: Project[] = [
    {
        id: "3",
        title: "Expense Tracker Website",
        image: "/assets/images/animated-folder-website-1.png",
    },
    {
        id: "4",
        title: "Love stories Website",
        image: "/assets/images/animated-folder-website-2.png",
    },
    {
        id: "5",
        title: "Video call POC Website",
        image: "/assets/images/animated-folder-website-3.png",
    },
    {
        id: "6",
        title: "Bill and Inventory Website",
        image: "/assets/images/animated-folder-website-4.png",
    },
    {
        id: "7",
        title: "Wee Chat Website",
        image: "/assets/images/animated-folder-website-5.png",
    }

];

const appDesignProjects: Project[] = [    
    {
        id: "8",
        title: "Balakrishnamoorthy Portfolio",
        image: "/assets/images/animated-folder-port-1.png",
    },
    {
        id: "9",
        title: "Ajith Joshuva Portfolio",
        image: "/assets/images/animated-folder-port-2.png",
    }
];

export default function MoreWorksPage() {
    return (
        <div className="pt-24">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-4xl mb-12 primary-font text-center md:text-left font-semibold tracking-tight">More Works</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-32">
                    <AnimatedFolder
                        title="Landing Page"
                        projects={landingPageProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=Landing Pages"
                    />
                    <AnimatedFolder
                        title="Website Design"
                        projects={websiteDesignProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=Web Applications"
                    />
                    <AnimatedFolder
                        title="Portfolios"
                        projects={appDesignProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=Portfolios"
                    />
                </div>
            </div>
        </div>
    );
}