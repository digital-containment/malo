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
            <h1 className={styles.heroTitle}>MalO — SCP-1471 Chat App for Android</h1>
            <p className={styles.heroSubtitle}>
              Experience an atmospheric, messenger-style chat with MalO (SCP-1471). Fan-made, privacy-friendly, crafted for SCP fans.
            </p>

            {/* Основная кнопка CTA - бета версия */}
            <div className={styles.ctaContainer}>
              <BetaPlayButton location="hero" />
            </div>

            {/* Строка доверия */}
            <p className={styles.trustLine}>Fan-made • Not affiliated with SCP Foundation • CC BY-SA 3.0 attribution inside</p>
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
