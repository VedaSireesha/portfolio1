import React from 'react'

const Education = () => {
const educationData = [
    {
        degree: "MS - Computer Science",
        university: "Western Illinois University",
        location: "Macomb, USA",
        startYear: "Aug 2023",
        endYear: "May 2025",
        gpa: "3.5"
    },
    {
        degree: "BE - Electrical and Electronics Engineering",
        university: "Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya",
        location: "Tamil Nadu, India",
        startYear: "Aug 2017",
        endYear: "July 2021",
        gpa: "8.8"
    }
];


return (
    <div id="education" className="mt-[90px]">
        <div className="min-h-[50vh] flex items-start justify-center pt-4 px-2 sm:px-6 md:px-8">
            <section className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 lg:p-20 w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl border-4 border-blue-200 relative overflow-visible">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-20 h-20 sm:w-40 sm:h-40 bg-blue-300 rounded-full opacity-30 z-0"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 w-20 h-20 sm:w-40 sm:h-40 bg-blue-200 rounded-full opacity-30 z-0"></div>
                <div className="absolute top-2 right-1/2 translate-x-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-blue-100 rounded-full opacity-40 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-8 text-blue-600 text-center font-cursive">Education</h2>
                    <div className="space-y-6">
                        {educationData.map((edu, idx) => (
                            <div
                                key={idx}
                                className="bg-blue-50 rounded-xl shadow p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 group"
                            >
                                <div className="flex flex-col">
                                    <h3 className="text-lg sm:text-xl font-bold text-blue-700 transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-600 text-sm sm:text-base">{edu.university}</p>
                                    <p className="text-blue-600 text-sm sm:text-base">{edu.location}</p>
                                </div>
                                <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{edu.startYear} - {edu.endYear}</span>
                                    <span className="text-xs sm:text-sm text-blue-500 font-semibold">GPA: {edu.gpa}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6 sm:mt-10 space-x-4">
                        <span className="inline-block animate-bounce text-blue-400 text-3xl sm:text-4xl md:text-5xl">🎓</span>
                        <span className="inline-block animate-bounce text-blue-300 text-3xl sm:text-4xl md:text-5xl">📚</span>
                        <span className="inline-block animate-bounce text-blue-400 text-3xl sm:text-4xl md:text-5xl">🌟</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}

export default Education
