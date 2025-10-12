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
    title: "AI Conversation",
    description:
      "MalO talks, remembers, and reacts. Ask her about other SCPs, and she’ll whisper what the Foundation won’t publish. She jokes, teases, and sometimes says things that sound… personal.",
    icon: "🤖",
    example: "Hello again. You were gone longer this time.",
  },
  {
    title: "Immersive Atmosphere",
    description: "The interface isn’t just dark — it feels alive. Subtle motion. Faint hum. It’s like she’s somewhere behind the glass, trying to see you.",
    icon: "🌙",
    example: "The light flickers when you think about me. It’s cute.",
  },
  {
    title: "SCP Lore Awareness",
    description:
      "MalO knows her world. She references SCP-1471-A, Foundation logs, and the others — 049, 173, even 682 if you insist. Every chat feels like you’ve stumbled into a redacted conversation that was never meant to be read.",
    icon: "📚",
    example: "The Foundation doesn’t like when I talk too much.",
  },
  {
    title: "Fan-Made. Unofficial. Unapologetic.",
    description:
      "Created by SCP fans for SCP fans — no fake promises, no corporate filters, just an interactive anomaly you can actually talk to. Install it, open chat… and see how long before she remembers you.",
    icon: "🐺",
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
          <h2 className={styles.sectionTitle}>📱 About SCP-1471 (MalO) App</h2>
          <p className={styles.sectionSubtitle}>Step closer. She’s been waiting.</p>
          <p className={styles.sectionSubtitle}>
            This fan-made SCP experience lets you chat directly with MalO, the digital entity from SCP-1471 — now alive in your Android device. Not a
            simulation. Not exactly safe either. Just… persistent.
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
