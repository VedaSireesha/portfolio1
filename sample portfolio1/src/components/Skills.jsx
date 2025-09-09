
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaMicrosoft, FaCloud } from "react-icons/fa";
import {
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import powerbiLogo from '../assets/powerbi.png';

const Skills = () => {
// Skill data with react-icons
const skills = [
    {
        category: "SKILLS",
        items: [
            { name: <span className="text-black">HTML</span>, logo: <FaHtml5 className="text-orange-500 bg-white rounded px-1 py-0.5 text-2xl" /> },
            { name: <span className="text-black">CSS</span>, logo: <FaCss3Alt className="text-blue-600 bg-white rounded px-1 py-0.5 text-2xl" /> },
            { name: <span className="text-black">TypeScript</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" className="w-7 h-7" /> },
            { name: <span className="text-black">Python</span>, logo: <i className="devicon-python-plain colored text-2xl" /> },
            { name: <span className="text-black">React</span>, logo: <FaReact className="text-blue-400 text-2xl" /> },
            { name: <span className="text-black">Node.js</span>, logo: <FaNodeJs className="text-green-600 text-2xl" /> },
            { name: <span className="text-black">PHP</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-7 h-7" /> },
            { name: <span className="text-black">Tailwind CSS</span>, logo: <SiTailwindcss className="text-[#38bdf8] text-2xl" /> },
            { name: <span className="text-black">MYSQL</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-7 h-7" /> },
            { name: <span className="text-black">REST APIs</span>, logo: <FaCloud className="text-blue-500 text-2xl" /> },
        ],
    },
    {
        category: "TOOLS & TECHNOLOGIES",
        items: [
            { name: <span className="text-black">Figma</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-7 h-7" /> },
            { name: <span className="text-black">Adobe Illustrator</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Adobe Illustrator" className="w-7 h-7" /> },
            { name: <span className="text-black">Canva</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-7 h-7" /> },
            { name: <span className="text-black">Adobe Photoshop</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Adobe Photoshop" className="w-7 h-7" /> },
            { name: <span className="text-black">Wireframe</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Wireframe" className="w-7 h-7" /> },
            { name: <span className="text-black">Prototyping</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Prototyping" className="w-7 h-7" /> },
            { name: <span className="text-black">Excel</span>, logo: <FaMicrosoft className="text-green-600 text-2xl" /> },
            { name: <span className="text-black">SCRUM</span>, logo: null },
            { name: <span className="text-black">UI/UX</span>, logo: null },
            { name: <span className="text-black">Agile</span>, logo: <span className="text-blue-500 text-2xl font-bold">⚡</span> },
            { name: <span className="text-black">Microsoft Word</span>, logo: <FaMicrosoft className="text-blue-600 text-2xl" /> },
            { name: <span className="text-black">WordPress</span>, logo: <SiWordpress className="text-[#21759b] text-2xl" /> },
            { name: <span className="text-black">PuTTY</span>, logo: (
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9e/PuTTY_icon_128px.png"
                    alt="PuTTY"
                    className="w-7 h-7"
                    onError={e => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg";
                    }}
                />
            ) },
            { name: <span className="text-black">Power BI</span>, logo: <img src={powerbiLogo} alt="Power BI" className="w-7 h-7" /> },
            { name: <span className="text-black">JIRA</span>, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="JIRA" className="w-7 h-7" /> },
            { name: <span className="text-black">Git</span>, logo: <FaGitAlt className="text-orange-600 text-2xl" /> },
            { name: <span className="text-black">GitHub</span>, logo: <FaGithub className="text-black text-2xl" /> },
            { name: <span className="text-black">Zoho CRM</span>},
        ],
    },
    
];

return (
    <div id="skills" className="mt-[90px]">
        <div className="min-h-[80vh] flex items-start justify-center pt-2 px-2 sm:px-4">
            <section className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 lg:p-20 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl w-full border-4 border-blue-200 relative overflow-visible">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-20 h-20 sm:w-40 sm:h-40 bg-blue-300 rounded-full opacity-30 z-0"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-12 sm:-right-12 w-20 h-20 sm:w-40 sm:h-40 bg-blue-200 rounded-full opacity-30 z-0"></div>
                <div className="absolute top-2 right-1/2 translate-x-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-blue-100 rounded-full opacity-40 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-8 text-blue-600 text-center font-cursive">
                        Skills
                    </h2>


                                        <div className="flex justify-center mt-6 space-x-4">
                                            <span className="inline-block animate-bounce text-blue-400 text-3xl sm:text-4xl md:text-5xl">💻</span>
                                            <span className="inline-block animate-bounce text-blue-300 text-3xl sm:text-4xl md:text-5xl">🛠️</span>
                                            <span className="inline-block animate-bounce text-blue-400 text-3xl sm:text-4xl md:text-5xl">🚀</span>
                                        </div>

                                        {/* Skills List with Logos */}
                    <ul className="mt-0 space-y-4">
                        {skills.map((skill) => (
                            <li
                                key={skill.category}
                                className="bg-blue-gray rounded-lg p-[10px] shadow-md border-l-[5px] border-blue-gray-light"
                            >
                                <div className="font-semibold mb-2">{skill.category}:</div>
                                <div className="flex flex-wrap items-center gap-4">
                                    {skill.items.map((item, idx) => (
                                        <div key={`${skill.category}-${idx}`} className="flex items-center space-x-2">
                                            <span className="text-2xl">{item.logo}</span>
                                            <span className="text-base">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    </div>
);
}

export default Skills
