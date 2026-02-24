import React, { useEffect, useState } from "react";
import "./TypingBubble.css";

const text = `
C’est avec une immense joie que je vous souhaite la bienvenue au centre de spécialité La FéeRima.
Notre mission est de promouvoir le bien-être psychologique des adolescents et des jeunes, en rendant l’accompagnement accessible à tous.

À la FéeRima l’écoute et le respect sont au cœur de notre action et notre équipe met son expertise au service d’un accompagnement personnalisé et de qualité.
`;

export default function TypingBubble() {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const speed = 20; // vitesse écriture (ms)

  useEffect(() => {
    if (!isAnimating) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setHasAnimated(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleMouseEnter = () => {
    if (!hasAnimated) {
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="typing-bubble-container"
      onMouseEnter={handleMouseEnter}
    >
      {/* image */}
      <img
        src="/assets/feerima/news-3.png"
        alt="profil"
        className="typing-profile-img"
      />

      {/* bulles décoratives */}
      <div className="typing-bubble small"></div>
      <div className="typing-bubble medium"></div>
      <div className="typing-bubble large"></div>

      {/* carte texte */}
      <div className="typing-message-card">
        <h2>Chers visiteurs</h2>
        <div className="typing-text-container">
          {/* Texte invisible pour réserver l'espace */}
          <p className="typing-placeholder">{text}</p>
          {/* Texte visible qui s'anime */}
          <p className="typing">{displayedText}</p>
        </div>
        <div className="typing-signature">Noura Saramanta</div>
      </div>
    </div>
  );
}
