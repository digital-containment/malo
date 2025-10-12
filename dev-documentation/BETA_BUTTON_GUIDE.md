# 🧪 Beta Play Button Component

## Описание

Компонент `BetaPlayButton` - это специальная кнопка для приложений в стадии бета-тестирования на Google Play. Отображает призыв к действию с badge "BETA" и опциональным текстом о лимитированном доступе.

## Использование

### Базовое использование

```tsx
import { BetaPlayButton } from "@site/src/components/LandingPage";

export default function MyComponent() {
  return <BetaPlayButton />;
}
```

### Без микро-текста

```tsx
<BetaPlayButton showMicroText={false} />
```

### С дополнительным классом

```tsx
<BetaPlayButton className="my-custom-class" />
```

## Props

| Prop            | Type      | Default | Описание                                                           |
| --------------- | --------- | ------- | ------------------------------------------------------------------ |
| `showMicroText` | `boolean` | `true`  | Показывать ли текст "Limited beta access — availability may vary." |
| `className`     | `string`  | `''`    | Дополнительный CSS класс для контейнера                            |

## Где используется

Компонент заменяет стандартные Google Play кнопки в:

1. **Hero** - главная секция (с микро-текстом)
2. **FinalCTA** - финальный призыв (без микро-текста)
3. **StickyMobileCTA** - использует прямую ссылку (не компонент)

## Особенности

### ✅ Визуальные элементы

- **Badge "BETA"** в правом верхнем углу (красный)
- **Градиентный фон** (#667eea → #764ba2)
- **Hover эффект** - подъем кнопки и усиление тени
- **Микро-текст** - курсивом, полупрозрачный

### ✅ Функциональность

- Открывается в новой вкладке (`target="_blank"`)
- Безопасная ссылка (`rel="noopener noreferrer"`)
- Прямая ссылка на бета-тестирование Google Play
- Адаптивный дизайн (мобильная оптимизация)

## Настройка ссылки

По умолчанию ведет на:

```
https://play.google.com/apps/testing/com.doctordredd.scp1471malo
```

Для изменения:

```tsx
// src/components/LandingPage/BetaPlayButton.tsx (строка 27)
href = "https://play.google.com/apps/testing/YOUR_PACKAGE_NAME";
```

## Стилизация

### Изменение цветов

```css
/* BetaPlayButton.module.css */

/* Градиент кнопки */
.playBtn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Цвет BETA badge */
.playBtn::before {
  background: #ff6b6b; /* Красный */
}
```

### Изменение размера

```css
.playBtn {
  padding: 16px 40px; /* Увеличить отступы */
  font-size: 1.125rem; /* Увеличить текст */
}
```

## Адаптация для светлого фона

Если используете на светлом фоне:

```tsx
<BetaPlayButton className="lightBg" />
```

```css
/* В вашем CSS */
.lightBg .microText {
  color: #666 !important;
}
```

## Переход с бета на релиз

Когда приложение выйдет из беты:

### Вариант 1: Использовать обычную кнопку Google Play

```tsx
// Заменить
<BetaPlayButton />

// На
<a href="https://play.google.com/store/apps/details?id=com.doctordredd.scp1471malo">
  <img src="/img/google-play-badge.png" alt="Get it on Google Play" />
</a>
```

### Вариант 2: Создать обычный PlayButton компонент

```tsx
// src/components/LandingPage/PlayButton.tsx
export default function PlayButton() {
  return (
    <a href="https://play.google.com/store/apps/details?id=YOUR_ID">
      <img src="/img/google-play-badge.png" alt="Get it on Google Play" />
    </a>
  );
}
```

## Примеры использования

### В Hero секции

```tsx
<div className={styles.ctaContainer}>
  <BetaPlayButton />
</div>
```

**Результат:** Кнопка с BETA badge + микро-текст о лимитированном доступе

### В Final CTA

```tsx
<BetaPlayButton showMicroText={false} />
<p className={styles.ctaSubtitle}>
  Fan-made SCP-1471 chat app for Android • Currently in Beta
</p>
```

**Результат:** Кнопка с BETA badge, но без микро-текста (текст в подзаголовке)

### В пользовательском компоненте

```tsx
import { BetaPlayButton } from "@site/src/components/LandingPage";

export default function CustomSection() {
  return (
    <section className="my-section">
      <h2>Join Our Beta Program</h2>
      <BetaPlayButton />
      <p>Be among the first to experience MalO!</p>
    </section>
  );
}
```

## Accessibility (A11y)

✅ **Правильные атрибуты:**

- `target="_blank"` + `rel="noopener noreferrer"` для безопасности
- Текст кнопки описательный ("Join the Beta on Google Play")
- Микро-текст для дополнительного контекста

✅ **Keyboard navigation:**

- Стандартная кнопка/ссылка, работает с Tab
- Enter/Space активируют ссылку

## Performance

- **CSS Modules** - локальные стили, без конфликтов
- **Нет внешних зависимостей** - только React
- **Легковесный** - ~2KB (включая CSS)
- **CSS transitions** - аппаратное ускорение (transform, opacity)

## Тестирование

### Проверка ссылки

```tsx
// Откройте в браузере и кликните на кнопку
// Должна открыться страница бета-тестирования Google Play
```

### Проверка адаптивности

```bash
# Chrome DevTools → Toggle device toolbar
# Проверьте на:
# - Mobile (375px)
# - Tablet (768px)
# - Desktop (1920px)
```

### Проверка hover эффекта

```css
/* Должна подниматься на 2px и увеличивать тень */
.playBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
```

## FAQ

**Q: Как убрать BETA badge?**
A: Удалите `::before` псевдоэлемент в CSS или создайте обычный PlayButton

**Q: Можно ли изменить текст кнопки?**
A: Да, отредактируйте строку 29 в `BetaPlayButton.tsx`:

```tsx
Join the Beta on Google Play  // Замените текст
```

**Q: Как добавить иконку?**
A: Добавьте emoji или SVG:

```tsx
🎮 Join the Beta on Google Play
```

**Q: Работает ли на iOS?**
A: Да, но ведет на Android страницу. Для iOS создайте отдельную кнопку.

## Лицензия

Компонент является частью MalO лендинга и следует той же лицензии (CC BY-SA 3.0).

---

**Готово к использованию!** 🚀

Все компоненты уже обновлены и используют `BetaPlayButton`.
