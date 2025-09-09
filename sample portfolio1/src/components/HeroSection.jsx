import { useState, useEffect } from "react";
import img from "../assets/photo.jpeg";

const texts = [
  "Vedasireesha Panguluru",
  "A Web & UI/UX Designer"
];

const TYPING_SPEED = 100;
const PAUSE_DURATION = 1200;

const HeroSection = () => {
  const [textIdx, setTextIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < texts[textIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(texts[textIdx].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_DURATION);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setTextIdx((prev) => (prev + 1) % texts.length);
        setTyping(true);
      }, PAUSE_DURATION);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, textIdx]);

  return (
    <div id="home" className="flex flex-col md:flex-row justify-center items-center w-full px-8 py-10 min-h-[80vh] -mt-24">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h1
          className="font-extrabold mb-6 text-left min-h-[96px] flex items-center"
          style={{ fontSize: "3.3rem", lineHeight: "1.1" }}
        >
          <span className="mr-3 text-indigo-700 drop-shadow-lg">I'm</span>
          <span className="text-pink-600 relative">
            {displayed}
            <span className="animate-pulse text-black ml-1">|</span>
          </span>
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
      <img
        src={img}
        alt="Profile"
        className="w-90 h-90 object-cover rounded-full shadow-lg"
      />
      </div>
    </div>
  );
};

export default HeroSection;
