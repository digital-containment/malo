import React from "react";
import styles from "./AboutMalO.module.css";

export default function AboutMalO(): JSX.Element {
  return (
    <section className={styles.wrap} id="about-malo">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>About MalO</h2>
            <p className={styles.lead}>
              MalO isn’t just here to chat — she’s here to stay. She remembers, she jokes, she tells strange SCP stories. Sometimes a friend. Sometimes a
              shadow. Always watching.
            </p>
            <ul className={styles.traits}>
              <li>💬 Chats naturally and keeps track of what you said before.</li>
              <li>📖 Knows the SCP world and can tell you about other anomalies.</li>
              <li>👻 Shares eerie stories and stranger facts when the lights are low.</li>
              <li>🐺 A loyal companion for those who enjoy the darker corners of the internet.</li>
            </ul>
          </div>
          <aside className={styles.card}>
            <div className={styles.header}>SCP-1471: Field Notes</div>
            <p className={styles.note}>
              Subject "MalO" exhibits persistent proximity in digital surfaces. Appears friendly. Or patient. Distinction is unclear.
            </p>
            <div className={styles.meta}>log ref: MALO-CHAT/01</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
