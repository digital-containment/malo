import React from "react";
import styles from "./FinalCTA.module.css";
import BetaPlayButton from "./BetaPlayButton";

/**
 * Компонент FinalCTA - финальный призыв к действию
 */
export default function FinalCTA(): JSX.Element {
  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Chat with MalO?</h2>

          <BetaPlayButton showMicroText={false} />

          <p className={styles.ctaSubtitle}>Fan-made SCP-1471 chat app for Android • Currently in Beta</p>
        </div>
      </div>
    </section>
  );
}
