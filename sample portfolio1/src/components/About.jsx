

const About = () => {
return (
    <div id="about" className="min-h-[40vh] sm:min-h-[70vh] flex items-start justify-center pt-6 px-2 sm:px-4">
        <section className="bg-white rounded-3xl shadow-2xl p-6 sm:p-12 md:p-20 lg:p-28 max-w-6xl w-full sm:w-[95%] md:w-[90%] border-4 border-pink-200 relative overflow-visible">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 sm:-top-16 sm:-left-16 w-32 h-32 sm:w-56 sm:h-56 bg-pink-300 rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 w-32 h-32 sm:w-56 sm:h-56 bg-pink-200 rounded-full opacity-30 z-0"></div>
            <div className="absolute top-4 right-1/2 translate-x-1/2 w-12 h-12 sm:w-24 sm:h-24 bg-pink-100 rounded-full opacity-40 z-0"></div>
            <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-10 text-pink-600 text-center font-cursive">About Me</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center leading-relaxed">
                    I am a passionate <span className="font-semibold text-pink-500">Web Developer & UI/UX Designer</span> with 2+ years of experience and a strong foundation in front-end development and UI/UX design, skilled in JavaScript, Figma, Canva, and Adobe Illustrator. Experienced in maintaining websites, designing clean banners, modern layouts, and mobile-friendly interfaces. I combine creative design expertise with technical knowledge to deliver intuitive and engaging digital experiences.<br />
                    I love crafting beautiful interfaces and bringing ideas to life with code!
                </p>
                <div className="flex justify-center mt-8 sm:mt-12 space-x-3 sm:space-x-6">
                    <span className="inline-block animate-bounce text-pink-400 text-3xl sm:text-5xl">💖</span>
                    <span className="inline-block animate-bounce text-pink-300 text-3xl sm:text-5xl">🌸</span>
                    <span className="inline-block animate-bounce text-pink-400 text-3xl sm:text-5xl">✨</span>
                    <span className="inline-block animate-bounce text-pink-200 text-3xl sm:text-5xl">🦋</span>
                </div>
            </div>
        </section>
    </div>
)
}

export default About
