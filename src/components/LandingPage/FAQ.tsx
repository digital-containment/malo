import React, { useState } from "react";
import styles from "./FAQ.module.css";

/**
 * Интерфейс для одного вопроса FAQ
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Список часто задаваемых вопросов
 */
const faqItems: FAQItem[] = [
  {
    question: "Is this the official SCP-1471 app?",
    answer: "No. This is a fan-made experience inspired by SCP-1471 (MalO), not affiliated with SCP Foundation.",
  },
  {
    question: "What is SCP-1471 (MalO)?",
    answer: "In SCP lore, MalO is an anomalous app linked to SCP-1471. Our app delivers a safe, atmospheric chat experience for fans.",
  },
  {
    question: "Android only?",
    answer: "Yes, Android only for now. iOS may come later.",
  },
  {
    question: "Is it safe and privacy-friendly?",
    answer: "Yes. Clear permissions and privacy options. You can disable features anytime.",
  },
];

/**
 * Компонент для одного аккордеона FAQ
 */
function FAQAccordion({ item }: { item: FAQItem }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/**
 * Компонент FAQ - блок с часто задаваемыми вопросами
 */
export default function FAQ(): JSX.Element {
  return (
    <section className={styles.faq}>
      <div className="container">
        <h2 className={styles.sectionTitle}>FAQ</h2>

        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <FAQAccordion key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
