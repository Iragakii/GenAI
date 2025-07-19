import React, { useState, useEffect, useRef, FC } from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";

type Timeout = ReturnType<typeof setTimeout>;

const AiHashName: FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const animationRef = useRef<Timeout | null>(null);
  const pauseTimeoutRef = useRef<Timeout | null>(null);

  const phrases: string[] = [
    "Marketing Assistant Agent",
    "Sales AI Agent",
    "Customer Service AI Agent",
    "AI Image Generator",
    "Social Media AI Agent",
    "Data Analysis AI Agent",
    "Voice AI Agent",
    "Facebook Leads AI Agent",
    "Brand Monitoring AI Agent ",
    "PerfeX AI Agent",
  ];

  const animateToNextPhrase = (fromText: string, toText: string) => {
    let currentIndex = 0;
    if (animationRef.current) clearInterval(animationRef.current);

    animationRef.current = setInterval(() => {
      if (currentIndex >= toText.length) {
        if (animationRef.current) clearInterval(animationRef.current);
        setDisplayText(toText);

        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
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
      if (animationRef.current) clearInterval(animationRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
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
      if (animationRef.current) clearInterval(animationRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      setDisplayText(phrases[currentPhraseIndex]);
    }
  }, [isHovering]);

  return (
    <>
      <Link to="#">
        <div>
          <span
            className="hover-glow text-xl sm:text-2xl font-[var(--my-font-weight)] px-[11px] text-center block"
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
