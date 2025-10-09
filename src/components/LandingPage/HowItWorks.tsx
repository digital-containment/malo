import React from "react";
import styles from "./HowItWorks.module.css";

/**
 * Интерфейс для одного шага инструкции
 */
interface Step {
  number: number;
  title: string;
  description: string;
}

/**
 * Шаги использования приложения
 */
const steps: Step[] = [
  {
    number: 1,
    title: "Download",
    description: "Get the app on Google Play and sign in.",
  },
  {
    number: 2,
    title: "Start the Chat",
    description: "Open a conversation with MalO (SCP-1471) in a familiar messenger UI.",
  },
  {
    number: 3,
    title: "Stay Engaged",
    description: "Receive atmospheric updates and explore new interactions over time.",
  },
];

/**
 * Компонент HowItWorks - инструкция по использованию приложения
 */
export default function HowItWorks(): JSX.Element {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How It Works</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
