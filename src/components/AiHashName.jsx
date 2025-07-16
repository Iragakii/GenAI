import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/custom.css";

const AiHashName = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const animationRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const phrases = [
    "Marketing AI Agent",
    "Sales AI Agent",
    "Customer Service AI Agent",
    "AI Image Generator",
    "Social Media AI Agent",
    "Data Analysis AI Agent",
    "Voice AI Agent",
    "A CODE ARTIST",
    "Brand Monitoring AI Agent ",
    "PerfeX AI Agent",
  ];

  const animateToNextPhrase = (fromText, toText) => {
    let currentIndex = 0;
    clearInterval(animationRef.current);

    animationRef.current = setInterval(() => {
      if (currentIndex >= toText.length) {
        clearInterval(animationRef.current);
        setDisplayText(toText);

        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
          if (isHovering) {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }, 1500);

        return;
      }

      const newChars = fromText.split("").map((char, i) => {
        return i <= currentIndex ? toText[i] || " " : char;
      });

      setDisplayText(newChars.join(""));
      currentIndex++;
    }, 50);
  };

  useEffect(() => {
    setDisplayText(phrases[0]);

    return () => {
      clearInterval(animationRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      const currentText = displayText;
      const nextText = phrases[currentPhraseIndex];
      animateToNextPhrase(currentText, nextText);
    }
  }, [currentPhraseIndex]);

  useEffect(() => {
    if (isHovering) {
      const nextIndex = (currentPhraseIndex + 1) % phrases.length;
      setCurrentPhraseIndex(nextIndex);
    } else {
      clearInterval(animationRef.current);
      clearTimeout(pauseTimeoutRef.current);
      setDisplayText(phrases[currentPhraseIndex]);
    }
  }, [isHovering]);

  return (
    <>
      <Link>
        <div>
          {/* Simplified version - remove classes one by one to identify the culprit */}
          <span
            className="hover-glow text-4xl font-bold"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {displayText}
          </span>
        </div>
      </Link>
    </>
  );
};

export default AiHashName;
