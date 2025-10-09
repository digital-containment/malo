import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Privacy.module.css";

/**
 * Компонент Privacy - блок о приватности и лицензии
 */
export default function Privacy(): JSX.Element {
  return (
    <section className={styles.privacy}>
      <div className="container">
        <div className={styles.privacyContent}>
          <h2 className={styles.sectionTitle}>Privacy & License</h2>

          <p className={styles.privacyText}>
            This is a fan-made app inspired by SCP-1471 (MalO). We are not affiliated with SCP Foundation. Content follows CC BY-SA 3.0 with attribution. Your
            privacy matters — see our Privacy Policy for details.
          </p>

          <div className={styles.linksContainer}>
            <Link to="/privacy" className={styles.privacyLink}>
              Privacy Policy
            </Link>
            <span className={styles.linkSeparator}>•</span>
            <Link to="/docs/about-scp" className={styles.privacyLink}>
              License & Attribution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
