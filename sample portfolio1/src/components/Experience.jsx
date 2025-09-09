import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Safestorage Technologies & Services Pvt. Ltd.",
            role: "Web & UI/UX Designer",
            location: "Bangalore, INDIA",
            start: "May 2021",
            end: "Jul 2023",
            description: [
                "Designed modern, high-quality banners, posters, and digital ads using Figma, Canva, and Adobe Illustrator, ensuring brand consistency.",
                "Redesigned key website pages (Homepage, Services, Pricing, Contact, Booking, Blog) with HTML & CSS, improving page engagement by 20%.",
                "Conducted UI/UX reviews and proposed improvements to layouts, typography, and spacing, resulting in a 15% better user experience (measured via feedback surveys).",
                "Implemented responsive, mobile-friendly designs with optimized navigation and larger CTAs, boosting mobile retention by 30%.",
                "Created interactive prototypes and reusable UI components (icons, buttons, dropdowns, progress indicators) for faster development cycles.",
                "Supported testing and quality assurance processes, conducting unit testing, integration testing, debugging, and automation testing for seamless functionality.",
                "Designed customer journey flows and landing pages for campaigns (festive offers, Anniversaries, storage solutions), contributing to a 18% increase in lead conversions.",
                "Created wireframes and mockups for website landing pages and customer portals, improving user experience and driving a 15% increase in lead conversions.",
                "Implemented responsive web design using HTML & CSS, ensuring the website rendered smoothly across mobile, tablet, and desktop devices, resulting in a 30% boost in mobile user retention.",
                "Enhanced visual storytelling through modern layouts and typography aligned with brand guidelines, which helped improve average session duration by 20%.",
                "Suggested and implemented optimized CTA placements (“Book Now,” “Get Quote,” “Chat with Us”), which improved click-through rates by 18%."
            ]
        }
    ];

    return (
        <div id="experience" className="mt-[90px]">
            <div className="min-h-screen flex items-start justify-center pt-2 px-2 sm:px-4">
                <section className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 lg:p-20 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl w-full border-4 border-green-200 relative overflow-visible">
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-20 h-20 sm:w-40 sm:h-40 bg-green-300 rounded-full opacity-30 z-0"></div>
                    <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 w-20 h-20 sm:w-40 sm:h-40 bg-green-200 rounded-full opacity-30 z-0"></div>
                    <div className="absolute top-2 right-1/2 translate-x-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-green-100 rounded-full opacity-40 z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-8 text-green-600 text-center font-cursive">
                            Experience
                        </h2>

                        {/* Icons */}
                        <div className="flex justify-center mt-6 space-x-4">
                            <span className="inline-block animate-bounce text-green-400 text-3xl sm:text-4xl md:text-5xl">💼</span>
                            <span className="inline-block animate-bounce text-green-300 text-3xl sm:text-4xl md:text-5xl">🌱</span>
                            <span className="inline-block animate-bounce text-green-400 text-3xl sm:text-4xl md:text-5xl">🚀</span>
                        </div>

                        {/* Experience Items */}
                        <div className="mt-10 space-y-8">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="bg-green-50 rounded-xl p-4 shadow-md border-l-4 border-green-300">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-green-700 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 cursor-pointer">
                                                {exp.company}
                                            </h3>
                                            <p className="text-sm text-green-800 font-semibold">{exp.role}</p>
                                            <span className="text-sm text-green-500">{exp.location}</span>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                                            {exp.start} - {exp.end}
                                        </div>
                                    </div>

                                    <ul className="list-disc list-outside text-gray-700 ml-6 space-y-1 text-justify">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="leading-relaxed text-justify">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Experience;
