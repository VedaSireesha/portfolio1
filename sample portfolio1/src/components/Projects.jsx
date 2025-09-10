import React from 'react'

const Projects = () => {
return (
    <div id="projects" className="mt-[0px] lg:mt-10 mb-20">
        <div className="min-h-[10vh] flex items-start justify-center pt-2 px-2 sm:px-6 md:px-8">
            <section className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 lg:p-20 w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl border-4 border-purple-200 relative overflow-visible
                lg:-mt-24
            ">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-20 h-20 sm:w-40 sm:h-40 bg-purple-300 rounded-full opacity-30 z-0"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 w-20 h-20 sm:w-40 sm:h-40 bg-purple-200 rounded-full opacity-30 z-0"></div>
                <div className="absolute top-2 right-1/2 translate-x-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-purple-100 rounded-full opacity-40 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-8 text-purple-600 text-center font-cursive">Projects</h2>
                    <div className="flex flex-col gap-8">
                        {[
                            {
                                name: 'SafeStorage Dubai Website',
                                date: 'Jul 2025 – Aug 2025',
                                desc: [
                                    'Designed and developed “SafeStorage Dubai” website as a personal project using typescript, enabling customers to generate quotations, book pickups, manage monthly rentals, and request item retrievals seamlessly.', 
                                    'This enables the payment gateways in means of processing the payments hassle-free.', 
                                    'Implemented the platform using HTML, CSS, and TypeScript, ensuring a responsive, user-friendly interface and smooth navigation across devices.'
                                ],
                            },
                            {
                                name: 'Concert Ticket Booking System ',
                                date: 'Jan 2025 – May 2025',
                                desc: [
                                    'The BTS Concert Ticket Booking System is a full-stack web application built to streamline ticket reservations and concert management for large-scale events.', 
                                    'It allows fans to view upcoming concerts, reserve tickets (including VIP packages), manage bookings, and receive e-tickets with QR code validation for secure entry. Administrators can create and update events, allocate seating, monitor bookings, and generate revenue reports through a secure, role-based backend system. The platform also integrates secure payment gateways and delivers real-time updates to enhance the overall fan experience and ensure smooth operations.',
                                    'Tech: HTML, CSS, MySQL, Java (Spring Boot), Excel, ER modelling, SQL View, Indexing.',
                                ],
                            },
                            {
                                name: 'Inventory Management System ',
                                date: 'Aug 2024 – Dec 2024',
                                desc: [
                                    'Developed a web-based inventory management system that allows customers to rent storage space by selecting items from an inventory list.', 
                                    'The frontend is built using HTML, CSS, JavaScript, React, Bootstrap, and jQuery to ensure a user-friendly and responsive interface.',
                                    'Features include real-time charge estimation, quotation generation, and scheduling of pickup dates.',
                                    'This enables users to perform essential inventory operations such as adding, updating, viewing, and deleting items seamlessly.',
                                    'React is used for dynamic content rendering, while Bootstrap provides a clean, responsive design, and jQuery is used to enhance the interactivity of the app.',
                                    'Applied Agile methodologies (Scrum framework) to manage the design and development lifecycle, ensuring iterative delivery and continuous improvement.',
                                    'The backend handles all business logic related to inventory management and supports CRUD (Create, Read, Update, Delete) operations.',
                                    'The system efficiently handles the flow of data between the React frontend and backend, ensuring reliable and real-time inventory updates.',
                                    'This full-stack solution provides a complete management system for handling inventory from entry to retrieval, making it a robust tool for shop management.',
                                    'Tech: HTML, CSS, SQL, PHP, React, jQuery, Excel, Scrum, Jira.'
                                ],
                            },
                            
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-purple-50 rounded-xl shadow p-4 sm:p-6 flex flex-col gap-2 border border-purple-100 group transition-shadow duration-200 hover:shadow-lg"
                            >
                                <div
                                    className="text-lg sm:text-xl font-bold text-purple-700 transition-transform duration-200 ease-in-out group-hover:scale-105 cursor-pointer inline-block"
                                >
                                    {project.name}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-700 font-medium">{project.date}</div>
                                <ul className="list-disc pl-5 text-base sm:text-lg text-gray-800 opacity-85 space-y-1">
                                    {Array.isArray(project.desc)
                                        ? project.desc.map((point, i) => <li key={i}>{point}</li>)
                                        : <li>{project.desc}</li>
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6 sm:mt-10 space-x-4">
                        <span className="inline-block animate-bounce text-purple-400 text-3xl sm:text-4xl md:text-5xl">💻</span>
                        <span className="inline-block animate-bounce text-purple-300 text-3xl sm:text-4xl md:text-5xl">🚀</span>
                        <span className="inline-block animate-bounce text-purple-400 text-3xl sm:text-4xl md:text-5xl">✨</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}

export default Projects
