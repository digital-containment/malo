import React from "react";
import styles from "./BetaPlayButton.module.css";

/**
 * Интерфейс пропсов для кнопки бета-доступа
 */
interface BetaPlayButtonProps {
  /** Показывать ли микро-текст о лимитированном доступе */
  showMicroText?: boolean;
  /** Дополнительный CSS класс */
  className?: string;
}

/**
 * Компонент BetaPlayButton - кнопка для присоединения к бета-тестированию
 * Используется вместо обычной кнопки Google Play, когда приложение в бете
 */
export default function BetaPlayButton({ showMicroText = true, className = "" }: BetaPlayButtonProps): JSX.Element {
  return (
    <div className={`${styles.betaButtonContainer} ${className}`}>
      <a href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo" className={styles.playBtn} target="_blank" rel="noopener noreferrer">
        Join the Beta on Google Play
      </a>

      {showMicroText && <p className={styles.microText}>Limited beta access — availability may vary.</p>}
    </div>
  );
}
