import React from "react";
import Link from "@docusaurus/Link";
import styles from "./LandingFooter.module.css";

/**
 * Компонент LandingFooter - футер для лендинга
 */
export default function LandingFooter(): JSX.Element {
  return (
    <footer className={styles.landingFooter}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>© scp-1471.app — Fan-made. Not affiliated with SCP Foundation. CC BY-SA 3.0 attribution inside.</p>

          <div className={styles.footerLinks}>
            <Link to="/privacy" className={styles.footerLink}>
              Privacy Policy
            </Link>
            <span className={styles.linkSeparator}>•</span>
            <Link to="/docs/about-scp" className={styles.footerLink}>
              License & Attribution
            </Link>
            <span className={styles.linkSeparator}>•</span>
            <Link to="/contacts" className={styles.footerLink}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
