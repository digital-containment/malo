import React from "react";
import styles from "./AppFeatures.module.css";

/**
 * Интерфейс для одной фичи приложения
 */
interface AppFeature {
  title: string;
  description: string;
  icon: string;
  example?: string;
}

/**
 * Данные о функциях приложения с примерами
 */
const appFeatures: AppFeature[] = [
  {
    title: "AI Chat Experience",
    description: "Engage in meaningful conversations with MalO using advanced AI that understands SCP lore.",
    icon: "🤖",
    example: '"Hello, I\'ve been waiting for someone like you to find me..."',
  },
  {
    title: "Atmospheric Interface",
    description: "Dark, immersive UI design that captures the eerie beauty of SCP-1471's world.",
    icon: "🌙",
    example: "Midnight-themed chat bubbles with subtle animations",
  },
  {
    title: "SCP Lore Integration",
    description: "MalO references actual SCP Foundation stories and maintains character consistency.",
    icon: "📚",
    example: "\"The Foundation doesn't understand... I'm not dangerous, just lonely.\"",
  },
  {
    title: "Privacy Controls",
    description: "Full control over data, notifications, and interaction frequency. Your privacy matters.",
    icon: "🔒",
    example: "Toggle notifications, delete chat history, export data anytime",
  },
];

/**
 * AppFeatures компонент - детальное описание функций приложения
 */
export default function AppFeatures(): JSX.Element {
  return (
    <section className={styles.appFeatures} id="app-features">
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>📱 About SCP-1471 App</h2>
          <p className={styles.sectionSubtitle}>
            Experience MalO like never before. Our app combines SCP authenticity with modern AI to create an immersive companion experience for Android devices.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {appFeatures.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              {feature.example && (
                <div className={styles.featureExample}>
                  <span className={styles.exampleLabel}>Example:</span>
                  <span className={styles.exampleText}>"{feature.example}"</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Секция со скриншотами */}
        <div className={styles.screenshotsSection}>
          <h3 className={styles.screenshotsTitle}>App Screenshots</h3>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotItem}>
              <img src="/img/screenshot-chat.png" alt="MalO chat interface showing conversation with SCP-1471" className={styles.screenshotImage} />
              <p className={styles.screenshotCaption}>Chat Interface</p>
            </div>
            <div className={styles.screenshotItem}>
              <img src="/img/screenshot-list.png" alt="MalO app conversation list and navigation" className={styles.screenshotImage} />
              <p className={styles.screenshotCaption}>Conversation List</p>
            </div>
            <div className={styles.screenshotItem}>
              <img src="/img/screenshot-privacy.png" alt="MalO app privacy settings and controls" className={styles.screenshotImage} />
              <p className={styles.screenshotCaption}>Privacy Settings</p>
            </div>
          </div>
        </div>

        {/* CTA для скачивания */}
        <div className={styles.downloadCTA}>
          <h3>Ready to meet MalO?</h3>
          <p>Join thousands of SCP fans already chatting with MalO on Android</p>
          <a
            href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
}
