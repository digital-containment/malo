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
    question: "Can I download MalO for free?",
    answer: "Yes! MalO (SCP-1471) app is completely free to download from Google Play Store. No hidden fees or premium subscriptions.",
  },
  {
    question: "Does it work on Android devices?",
    answer: "Yes, our app is specifically designed for Android. Compatible with Android 7.0+ devices. iOS version may be considered in the future.",
  },
  {
    question: "What does MalO actually do?",
    answer:
      "MalO provides an immersive chat experience with the SCP-1471 character. She engages in conversations, shares SCP lore, and offers companionship in a safe, fictional context.",
  },
  {
    question: "Is this the official SCP-1471 app?",
    answer: "No. This is a fan-made experience inspired by SCP-1471 (MalO), not affiliated with SCP Foundation. It's created by SCP fans, for SCP fans.",
  },
  {
    question: "What is SCP-1471 (MalO) in SCP lore?",
    answer:
      "In SCP Foundation lore, MalO ver1.0.0 is an anomalous mobile app that connects users with a mysterious entity. Our app recreates this experience safely for entertainment.",
  },
  {
    question: "Is MalO app safe and privacy-friendly?",
    answer:
      "Absolutely. We prioritize user privacy with local data storage, transparent permissions, and full user control. No personal data collection, optional analytics only.",
  },
  {
    question: "Can MalO access my personal data?",
    answer:
      "No. MalO doesn't access your contacts, photos, or other personal data. It only requires internet for updates and storage for chat history - both with your permission.",
  },
  {
    question: "Is there any scary or disturbing content?",
    answer:
      "No jump scares or genuinely disturbing content. While MalO has an eerie appearance, interactions are friendly and atmospheric, not horror-focused.",
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
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>❓ Frequently Asked Questions</h2>
        <p className={styles.sectionSubtitle}>Everything you need to know about MalO (SCP-1471) app for Android</p>

        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <FAQAccordion key={idx} item={item} />
          ))}
        </div>

        <div className={styles.faqFooter}>
          <p>Have more questions?</p>
          <a href="/contacts" className={styles.contactLink}>
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}
