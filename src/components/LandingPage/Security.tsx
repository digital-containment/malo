import React from "react";
import styles from "./Security.module.css";

/**
 * Интерфейс для элемента безопасности
 */
interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

/**
 * Данные о мерах безопасности
 */
const securityFeatures: SecurityFeature[] = [
  {
    title: "Data Privacy First",
    description: "Your conversations stay on your device. No cloud storage of personal chats.",
    icon: "🔐",
    details: ["Local chat storage only", "No personal data collection", "Optional analytics with consent", "Full data export available"],
  },
  {
    title: "Transparent Permissions",
    description: "Clear explanation of every permission requested by the app.",
    icon: "📋",
    details: ["Internet access for app updates only", "Storage for chat history", "Notifications with user control", "No access to contacts or camera"],
  },
  {
    title: "Open Source Approach",
    description: "Community-driven development with transparent code practices.",
    icon: "🌐",
    details: ["Code available on GitHub", "Community contributions welcome", "Security audit friendly", "Regular updates and patches"],
  },
  {
    title: "Safe SCP Experience",
    description: "Fictional roleplay only - no harmful or disturbing content.",
    icon: "🛡️",
    details: ["Age-appropriate interactions", "Clear fiction boundaries", "No jump scares or horror", "Easy opt-out mechanisms"],
  },
];

/**
 * Security компонент - блок о безопасности и приватности
 */
export default function Security(): JSX.Element {
  return (
    <section className={styles.security} id="security-privacy">
      <div className="container">
        <div className={styles.securityHeader}>
          <h2 className={styles.sectionTitle}>🔒 Security & Privacy</h2>
          <p className={styles.sectionSubtitle}>
            Your trust is paramount. We've built MalO with privacy-by-design principles and complete transparency about data handling.
          </p>
        </div>

        <div className={styles.securityGrid}>
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className={styles.securityCard}>
              <div className={styles.cardHeader}>
                <span className={styles.securityIcon}>{feature.icon}</span>
                <h3 className={styles.securityTitle}>{feature.title}</h3>
              </div>

              <p className={styles.securityDescription}>{feature.description}</p>

              <ul className={styles.securityDetails}>
                {feature.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className={styles.securityDetail}>
                    <span className={styles.checkIcon}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Сертификаты и гарантии */}
        <div className={styles.trustSection}>
          <h3 className={styles.trustTitle}>Trust & Compliance</h3>
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>🏆</span>
              <div>
                <div className={styles.badgeTitle}>Community Verified</div>
                <div className={styles.badgeDesc}>Trusted by SCP fans worldwide</div>
              </div>
            </div>

            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>🔍</span>
              <div>
                <div className={styles.badgeTitle}>Open Source</div>
                <div className={styles.badgeDesc}>Code available for review</div>
              </div>
            </div>

            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>🌟</span>
              <div>
                <div className={styles.badgeTitle}>Regular Updates</div>
                <div className={styles.badgeDesc}>Continuous security improvements</div>
              </div>
            </div>
          </div>

          <div className={styles.privacyLinks}>
            <a href="/privacy" className={styles.privacyLink}>
              Read Full Privacy Policy →
            </a>
            <a href="/terms" className={styles.privacyLink}>
              Terms of Service →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
