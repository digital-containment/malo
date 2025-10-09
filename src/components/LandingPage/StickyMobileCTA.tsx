import React, { useState, useEffect } from "react";
import styles from "./StickyMobileCTA.module.css";

/**
 * Компонент StickyMobileCTA - "липкая" кнопка внизу экрана на мобильных устройствах
 * Показывается только когда пользователь прокрутил страницу вниз
 */
export default function StickyMobileCTA(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем кнопку после прокрутки на 300px
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.stickyContainer} ${isVisible ? styles.visible : ""}`}>
      <a href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo" className={styles.stickyButton} target="_blank" rel="noopener noreferrer">
        📱 Join Beta on Google Play
      </a>
    </div>
  );
}
