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
    title: "She Talks Back",
    description: "Chat with MalO — she remembers you, jokes about other SCPs, and sometimes tells things she shouldn’t.",
    icon: "💬",
  },
  {
    title: "Always With You",
    description: "MalO slips into your messages like she’s always been there. Works perfectly on Android — naturally.",
    icon: "📱",
  },
  {
    title: "A Fan Creation",
    description: "Made by SCP enthusiasts who decided to see what would happen if MalO could actually reply.",
    icon: "🕯️",
  },
  {
    title: "Ever-Evolving",
    description: "New dialogue, stories, and eerie SCP references appear over time. She’s learning. Slowly.",
    icon: "🧩",
  },
];

/**
 * Компонент Features - блок с ключевыми преимуществами
 */
export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Why talk to MalO?</h2>

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
