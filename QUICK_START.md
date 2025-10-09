# 🚀 MalO Landing Page - Quick Start

Лендинг-страница для приложения MalO (SCP-1471) на базе React + Docusaurus.

## 📦 Что создано

✅ **8 блоков лендинга** согласно ТЗ:

1. **Hero** - Главная секция с CTA
2. **Features** - 4 карточки преимуществ
3. **How It Works** - 3 шага инструкции
4. **Screenshots** - Галерея скриншотов
5. **Privacy & License** - Информация о приватности
6. **FAQ** - Часто задаваемые вопросы (аккордеоны)
7. **Final CTA** - Повторный призыв к действию
8. **Footer** - Футер с ссылками

🎁 **Бонус**: Липкая CTA кнопка для мобильных устройств

## 📁 Структура файлов

```
src/
├── components/
│   └── LandingPage/
│       ├── Hero.tsx / Hero.module.css
│       ├── Features.tsx / Features.module.css
│       ├── HowItWorks.tsx / HowItWorks.module.css
│       ├── Screenshots.tsx / Screenshots.module.css
│       ├── Privacy.tsx / Privacy.module.css
│       ├── FAQ.tsx / FAQ.module.css
│       ├── FinalCTA.tsx / FinalCTA.module.css
│       ├── LandingFooter.tsx / LandingFooter.module.css
│       ├── StickyMobileCTA.tsx / StickyMobileCTA.module.css
│       └── index.tsx (экспорты)
└── pages/
    └── index.tsx (главная страница)
```

## ⚡ Быстрый старт

### 1. Установите зависимости (если еще не установлены)

```bash
npm install
```

### 2. Запустите dev сервер

```bash
npm start
```

Откроется на http://localhost:3000

### 3. Добавьте изображения

Скопируйте изображения в `static/img/`:

- `google-play-badge.webp`
- `phone-mockup-chat.png`
- `screenshot-chat.png`
- `screenshot-list.png`
- `screenshot-privacy.png`
- `og-cover.png`

**Временно**: Можете использовать placeholder'ы (см. IMAGE_GUIDE.md)

### 4. Обновите ссылки на Google Play

В файлах:

- `src/components/LandingPage/Hero.tsx` (строка 21)
- `src/components/LandingPage/FinalCTA.tsx` (строка 13)
- `src/components/LandingPage/StickyMobileCTA.tsx` (строка 23)

Замените:

```tsx
href = "https://play.google.com/store/apps/details?id=your.app.id";
```

### 5. Билд для продакшена

```bash
npm run build
npm run serve
```

## 📚 Документация

- **LANDING_COMPONENTS.md** - Подробное описание компонентов
- **DEPLOYMENT_CHECKLIST.md** - Чек-лист перед запуском
- **IMAGE_GUIDE.md** - Руководство по подготовке изображений

## ✨ Особенности

### SEO оптимизация

- ✅ Семантические H1/H2 с ключевыми словами
- ✅ Alt-тексты для всех изображений
- ✅ Meta description в Layout
- ✅ Open Graph готов к настройке

### Адаптивный дизайн

- ✅ Mobile-first подход
- ✅ Брейкпоинты: 768px, 996px
- ✅ Липкая CTA кнопка на мобильных

### Производительность

- ✅ CSS Modules (изоляция стилей)
- ✅ Lazy loading для изображений
- ✅ Нет внешних зависимостей
- ✅ Оптимизированные анимации

### Код

- ✅ TypeScript типизация
- ✅ Комментарии на русском
- ✅ UI текст на английском
- ✅ Модульная структура

## 🎨 Кастомизация

### Изменить цвета

Основные цвета в CSS файлах:

```css
/* Темный фон */
#1a1a2e, #16213e

/* Градиент */
#667eea → #764ba2

/* Светлый фон */
#f8f9fa;
```

### Добавить/изменить контент

**Features**: `src/components/LandingPage/Features.tsx`

```tsx
const featuresList: FeatureItem[] = [{ title: "...", description: "...", icon: "..." }];
```

**FAQ**: `src/components/LandingPage/FAQ.tsx`

```tsx
const faqItems: FAQItem[] = [{ question: "...", answer: "..." }];
```

**Steps**: `src/components/LandingPage/HowItWorks.tsx`

```tsx
const steps: Step[] = [{ number: 1, title: "...", description: "..." }];
```

## 🐛 Troubleshooting

### Изображения не отображаются

- Проверьте путь: `/img/filename.png` (не `./img/`)
- Файлы должны быть в `static/img/`
- Перезапустите dev сервер

### Ошибки при билде

```bash
# Очистка кеша
rm -rf .docusaurus node_modules
npm install
npm start
```

### Стили не применяются

- Проверьте импорт CSS Modules: `import styles from './Component.module.css'`
- Классы должны быть: `className={styles.className}`

## 📊 Проверка перед деплоем

```bash
# Билд
npm run build

# Локальный просмотр продакшн версии
npm run serve

# Откройте Chrome DevTools → Lighthouse
# Цели: Performance > 90, SEO = 100
```

## 🚀 Деплой

### GitHub Pages

```bash
npm run deploy
```

### Vercel/Netlify

1. Подключите репозиторий
2. Build: `npm run build`
3. Output: `build/`

## 📞 Поддержка

Если что-то не работает:

1. Проверьте консоль браузера (F12)
2. Проверьте терминал
3. Читайте документацию в папке проекта

## ✅ Следующие шаги

- [ ] Добавить изображения (см. IMAGE_GUIDE.md)
- [ ] Обновить ссылки на Google Play
- [ ] Настроить Open Graph метатеги
- [ ] Запустить Lighthouse аудит
- [ ] Задеплоить на хостинг

---

**Готово к запуску!** 🎉

_Код написан с комментариями на русском, UI на английском, как и требовалось._
