import  { useEffect } from "react";
import "./GlitterEffect.css"

const GlitterEffect = () => {
  useEffect(() => {
    const createGlitter = () => {
      const glitter = document.createElement("div");
      glitter.className = "glitter";
      document.body.appendChild(glitter);

      const size = Math.random() * 4 + 2; // Random size (2px - 6px)
      glitter.style.width = `${size}px`;
      glitter.style.height = `${size}px`;

      glitter.style.left = `${Math.random() * window.innerWidth}px`;
      glitter.style.animationDuration = `${Math.random() * 9 + 7}s`; // Speed variation

      setTimeout(() => {
        glitter.remove(); // Remove after falling
      }, 5000);
    };

    const interval = setInterval(createGlitter, 100); // Create new glitter every 100ms

    return () => clearInterval(interval);
  }, []);

  return null; // No visible elements needed in the component
};

export default GlitterEffect;
