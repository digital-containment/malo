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
            <h1 className={styles.heroTitle}>SCP-1471: MalO, your unsettling new friend</h1>
            <h2 className={styles.heroSubtitle}>Talk to the mysterious entity that always watches — and maybe understands you a little too well.</h2>

            {/* Основная кнопка CTA - бета версия */}
            <div className={styles.ctaContainer}>
              <a href="#chat-preview" className={styles.startChatButton} aria-label="Start Chat with MalO">
                Start Chat
                <span className={styles.cursor}>▋</span>
              </a>
              <BetaPlayButton location="hero" showMicroText={false} />
            </div>

            {/* Строка доверия */}
            <p className={styles.trustLine}>Fan-made • Free • No ads</p>
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
