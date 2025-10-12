# MalO Landing Page - Компоненты

Структура лендинга для приложения MalO (SCP-1471) на React/Docusaurus.

## 📁 Структура компонентов

```
src/components/LandingPage/
├── Hero.tsx                  # Главный блок (шапка)
├── Hero.module.css
├── Features.tsx              # Ключевые преимущества (4 карточки)
├── Features.module.css
├── HowItWorks.tsx            # Инструкция (3 шага)
├── HowItWorks.module.css
├── Screenshots.tsx           # Скриншоты приложения
├── Screenshots.module.css
├── Privacy.tsx               # Приватность и лицензия
├── Privacy.module.css
├── FAQ.tsx                   # Часто задаваемые вопросы (аккордеоны)
├── FAQ.module.css
├── FinalCTA.tsx              # Финальный призыв к действию
├── FinalCTA.module.css
├── LandingFooter.tsx         # Футер лендинга
├── LandingFooter.module.css
└── index.tsx                 # Экспорт всех компонентов
```

## 🎨 Необходимые изображения

Разместите следующие изображения в папку `static/img/`:

### Обязательные:

1. **google-play-badge.webp** - Бейдж Google Play (скачайте официальный с [developer.android.com](https://play.google.com/intl/en_us/badges/))
2. **phone-mockup-chat.png** - Мокап телефона со скриншотом чата (для Hero секции)
3. **screenshot-chat.png** - Скриншот интерфейса чата с MalO
4. **screenshot-list.png** - Скриншот списка чатов
5. **screenshot-privacy.png** - Скриншот экрана Privacy/About

### Для SEO (Open Graph):

6. **og-cover.png** - Изображение для социальных сетей (1200x630px)

## 🔧 Настройка

### 1. Обновите ссылки на Google Play

В файлах `Hero.tsx` и `FinalCTA.tsx` замените placeholder:

```tsx
href = "https://play.google.com/store/apps/details?id=your.app.id";
```

на ваш реальный ID приложения.

### 2. Добавьте Open Graph метатеги

В `docusaurus.config.ts` добавьте:

```typescript
export default {
  // ...
  themeConfig: {
    // ...
    metadata: [
      { property: "og:title", content: "MalO — SCP-1471 Chat App for Android" },
      { property: "og:description", content: "Chat with MalO (SCP-1471). Fan-made app, atmospheric SCP experience." },
      { property: "og:image", content: "https://scp-1471.app/img/og-cover.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  },
};
```

### 3. Настройте внутренние ссылки

Убедитесь, что следующие страницы существуют:

- `/privacy` - Privacy Policy
- `/contacts` - Контакты
- `/docs/about-scp` - License & Attribution

## 🚀 Использование

Все компоненты уже подключены в `src/pages/index.tsx`. Просто запустите:

```bash
npm start
```

## 🎯 SEO оптимизация

### Ключевые слова включены в:

- ✅ H1: "MalO — SCP-1471 Chat App for Android"
- ✅ H2: Содержат "SCP-1471", "MalO", "Android"
- ✅ Alt-тексты изображений
- ✅ Meta description (в Layout)

### Внутренние якоря:

Все секции имеют семантические теги `<section>` и могут быть использованы для якорных ссылок.

## 📱 Адаптивность

Все компоненты адаптированы под мобильные устройства с брейкпоинтами:

- Desktop: > 996px
- Tablet: 768px - 996px
- Mobile: < 768px

## 🎨 Кастомизация

### Цвета

Основные цвета определены в CSS файлах:

- Темный фон: `#1a1a2e`, `#16213e`
- Градиент: `#667eea` → `#764ba2`
- Светлый фон: `#f8f9fa`

### Иконки

В компоненте `Features.tsx` используются эмодзи. Можете заменить на SVG иконки или Font Awesome.

## 📝 Комментарии

- Все комментарии в коде на русском языке
- Весь UI текст на английском языке
- JSDoc комментарии для всех компонентов и интерфейсов

## 🔄 Обновление контента

### Добавление новых фич:

Отредактируйте массив `featuresList` в `Features.tsx`

### Добавление FAQ:

Отредактируйте массив `faqItems` в `FAQ.tsx`

### Изменение шагов инструкции:

Отредактируйте массив `steps` в `HowItWorks.tsx`

## 📦 Зависимости

Используются только встроенные возможности Docusaurus:

- `@docusaurus/Link` - для внутренних ссылок
- `@docusaurus/useDocusaurusContext` - для конфига сайта
- `@theme/Layout` - стандартный Layout

Никаких дополнительных библиотек не требуется.

## 🐛 Troubleshooting

Если изображения не отображаются:

1. Проверьте, что файлы находятся в `static/img/`
2. Путь должен начинаться с `/img/`, не `./img/`
3. Перезапустите dev сервер

## 📄 Лицензия

Fan-made проект. Не аффилирован с SCP Foundation. Контент следует CC BY-SA 3.0.
