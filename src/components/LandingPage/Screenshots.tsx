import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Screenshots.module.css";

/**
 * Интерфейс для одного скриншота
 */
interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Компонент Screenshots - галерея скриншотов приложения
 */
export default function Screenshots(): JSX.Element {
  /**
   * Список скриншотов приложения
   */
  const screenshots: Screenshot[] = [
    {
      src: useBaseUrl("/img/screenshot-chat.png"),
      alt: "SCP-1471 chat app screenshot - conversation with MalO",
      caption: "Chat with MalO",
    },
    {
      src: useBaseUrl("/img/screenshot-list.png"),
      alt: "SCP-1471 MalO app screenshot - chat list interface",
      caption: "Clean chat list",
    },
    {
      src: useBaseUrl("/img/screenshot-privacy.png"),
      alt: "MalO Android app screenshot - privacy and license information",
      caption: "Privacy? Of cose - no. It is SCP-1471 Malo",
    },
  ];
  return (
    <section className={styles.screenshots}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Inside the App</h2>

        <div className={styles.screenshotsGrid}>
          {screenshots.map((screenshot, idx) => (
            <div key={idx} className={styles.screenshotCard}>
              <div className={styles.screenshotWrapper}>
                <img src={screenshot.src} alt={screenshot.alt} className={styles.screenshotImage} loading="lazy" />
              </div>
              <p className={styles.screenshotCaption}>{screenshot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
