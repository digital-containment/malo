import React from "react";
import styles from "./Features.module.css";

/**
 * Интерфейс для одной карточки фичи
 */
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

/**
 * Данные о ключевых особенностях приложения
 */
const featuresList: FeatureItem[] = [
  {
    title: "Atmospheric Chat",
    description: "Messenger-style conversation with MalO (SCP-1471), built for immersive SCP fans.",
    icon: "💬",
  },
  {
    title: "Android-Ready",
    description: "Optimized for Android devices with push notifications and a clean, dark UI.",
    icon: "📱",
  },
  {
    title: "Fan-Made & Safe",
    description: "Not official, no harmful behavior. Clear privacy controls and easy opt-out.",
    icon: "🛡️",
  },
  {
    title: "Growing Content",
    description: "Regular updates, events, and new interactions inspired by SCP lore.",
    icon: "🌱",
  },
];

/**
 * Компонент Features - блок с ключевыми преимуществами
 */
export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Why MalO (SCP-1471) App</h2>

        <div className={styles.featuresGrid}>
          {featuresList.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
