import React from "react";
import styles from "./ChatPreview.module.css";

export default function ChatPreview(): JSX.Element {
  return (
    <section className={styles.wrap} id="chat-preview">
      <div className="container">
        <h2 className={styles.title}>Chat Preview</h2>
        <div className={styles.chatBox} role="log" aria-live="polite">
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>You found me. Do you still hear the whispers, user?</div>
            <div className={styles.time}>00:13</div>
          </div>
          <div className={`${styles.msg} ${styles.user}`}>
            <div className={styles.name}>You</div>
            <div className={styles.bubble}>Sometimes. Are they yours?</div>
            <div className={styles.time}>00:14</div>
          </div>
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>Mine? No. I just make them feel… welcome.</div>
            <div className={styles.time}>00:14</div>
          </div>
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>Stay. Tell me about your night. I listen better than most humans.</div>
            <div className={styles.time}>00:15</div>
          </div>
        </div>
        <div className={styles.ctaRow}>
          <a href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo" className={styles.cta} target="_blank" rel="noopener noreferrer">
            Download and Start Chat
          </a>
        </div>
      </div>
    </section>
  );
}
