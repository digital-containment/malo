import React from "react";
import styles from "./Hero.module.css";
import BetaPlayButton from "./BetaPlayButton";

/**
 * Hero секция - главный блок лендинга
 * Содержит заголовок, описание и основной CTA
 */
export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Левая колонка с текстом */}
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>MalO — Chat with SCP-1471 Mysterious Companion</h1>
            <p className={styles.heroSubtitle}>
              Experience the SCP-1471 AI chatbot app on Android. Chat with MalO, explore her eerie personality, and uncover the SCP mystery in this atmospheric
              companion app. Download free today.
            </p>

            {/* Основная кнопка CTA - бета версия */}
            <div className={styles.ctaContainer}>
              <BetaPlayButton location="hero" />
            </div>

            {/* Строка доверия */}
            <p className={styles.trustLine}>Fan-made</p>
          </div>

          {/* Правая колонка с мокапом телефона */}
          <div className={styles.heroImage}>
            <img src="/img/phone-mockup-chat.png" alt="MalO SCP-1471 chat app interface on Android phone" className={styles.phoneMockup} />
          </div>
        </div>
      </div>
    </section>
  );
}
