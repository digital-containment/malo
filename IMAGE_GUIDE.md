# 🎨 Руководство по подготовке изображений

## 📐 Технические требования

### 1. Google Play Badge

- **Файл**: `google-play-badge.webp`
- **Размер**: 564 × 168 px (оригинальный)
- **Формат**: PNG с прозрачностью
- **Скачать**: https://play.google.com/intl/en_us/badges/
- **Цвет**: Используйте черный вариант для светлого фона

### 2. Phone Mockup (Hero Section)

- **Файл**: `phone-mockup-chat.png`
- **Размер**: 800 × 1600 px (макс)
- **Формат**: PNG или WebP
- **Drop shadow**: Да (мягкая тень)
- **Фон**: Прозрачный
- **Содержимое**: Скриншот чата с MalO на экране телефона

**Инструменты для создания:**

- https://mockuphone.com/ (онлайн, бесплатно)
- https://smartmockups.com/ (продвинутый)
- Figma + Device mockup плагин

### 3. Screenshots (Screenshots Section)

#### Screenshot 1: Chat Interface

- **Файл**: `screenshot-chat.png`
- **Размер**: 1080 × 1920 px (9:16)
- **Формат**: PNG → WebP (сконвертировать)
- **Содержимое**: Активный чат с MalO, несколько сообщений
- **Alt-текст**: "SCP-1471 chat app screenshot - conversation with MalO"

#### Screenshot 2: Chat List

- **Файл**: `screenshot-list.png`
- **Размер**: 1080 × 1920 px (9:16)
- **Формат**: PNG → WebP
- **Содержимое**: Список чатов (главный экран)
- **Alt-текст**: "SCP-1471 MalO app screenshot - chat list interface"

#### Screenshot 3: Privacy Screen

- **Файл**: `screenshot-privacy.png`
- **Размер**: 1080 × 1920 px (9:16)
- **Формат**: PNG → WebP
- **Содержимое**: Экран About/Privacy/Settings
- **Alt-текст**: "MalO Android app screenshot - privacy and license information"

### 4. Open Graph Image

- **Файл**: `og-cover.png`
- **Размер**: 1200 × 630 px (точно!)
- **Формат**: PNG или JPG
- **Размер файла**: < 1 MB
- **Содержимое**:
  - Логотип MalO
  - Текст: "MalO - SCP-1471 Chat App"
  - Фон: Темный, атмосферный
  - Скриншот чата (опционально)

## 🛠 Оптимизация изображений

### Конвертация в WebP

```bash
# Установка cwebp (Linux/Mac)
sudo apt install webp  # Ubuntu/Debian
brew install webp      # MacOS

# Конвертация одного файла
cwebp -q 80 screenshot-chat.png -o screenshot-chat.webp

# Batch конвертация
for file in *.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

### Онлайн инструменты:

- https://squoosh.app/ (Google, рекомендуется)
- https://tinypng.com/ (для PNG)
- https://imagecompressor.com/

### Целевые размеры файлов:

- Phone mockup: < 200 KB
- Screenshots: < 100 KB каждый
- OG image: < 500 KB
- Google Play badge: < 50 KB

## 🎨 Создание Open Graph изображения

### Canva (рекомендуется для новичков)

1. Перейдите на https://canva.com/
2. Создайте новый дизайн: **Custom size** → 1200 × 630 px
3. Выберите темный шаблон или создайте с нуля
4. Добавьте элементы:
   - Фон: Темный градиент (#1a1a2e → #16213e)
   - Логотип MalO (центр или слева)
   - Текст: "MalO - Chat with SCP-1471"
   - Подзаголовок: "Fan-made Android App"
   - Скриншот чата (опционально, справа)
5. Скачайте как PNG

### Figma (для дизайнеров)

```
Frame: 1200 × 630 px
Background: Linear gradient
  - #1a1a2e → #16213e (135deg)
Text layer:
  - "MalO" (Font: 72px, Bold, White)
  - "Chat with SCP-1471" (Font: 36px, Regular, #ccc)
  - "Fan-made • Android" (Font: 24px, Light, #999)
Image: Phone mockup (opacity 90%, right side)
Shadow: Drop shadow on all elements
```

## 📱 Примеры макетов

### Hero Section - Phone Mockup

```
┌─────────────────────┐
│   iPhone/Android    │
│  ┌───────────────┐  │
│  │               │  │
│  │  Chat Screen  │  │
│  │               │  │
│  │  MalO: Hi...  │  │
│  │  You: Hello   │  │
│  │  MalO: ...    │  │
│  │               │  │
│  │    [Input]    │  │
│  └───────────────┘  │
└─────────────────────┘
  Прозрачный фон + тень
```

### Screenshot Layout

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│              │  │              │  │              │
│  Chat with   │  │  Chat List   │  │   Privacy    │
│    MalO      │  │              │  │   Settings   │
│              │  │  • MalO      │  │              │
│  Messages    │  │  • Archive   │  │  CC BY-SA    │
│  ...         │  │              │  │  3.0         │
│              │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Open Graph Image

```
┌────────────────────────────────────────────┐
│                                            │
│   [LOGO]    MalO — SCP-1471 Chat App      │
│                                            │
│            Chat with MalO on Android       │
│                                            │
│   Fan-made • Privacy-friendly    [Phone]  │
│                                   [Mockup] │
└────────────────────────────────────────────┘
         1200 × 630 px
```

## ✅ Чек-лист перед загрузкой

- [ ] Все файлы названы правильно (lowercase, без пробелов)
- [ ] Размеры соответствуют требованиям
- [ ] Файлы оптимизированы (< целевого размера)
- [ ] WebP версии созданы (для screenshots)
- [ ] Прозрачность там, где нужна (mockup, badge)
- [ ] Alt-тексты подготовлены
- [ ] OG image протестирован на https://www.opengraph.xyz/

## 🎯 Быстрый старт (если нет времени)

### Placeholder изображения

Для быстрого запуска можете использовать placeholder'ы:

```html
<!-- Hero mockup -->
https://via.placeholder.com/800x1600/1a1a2e/ffffff?text=Phone+Mockup

<!-- Screenshots -->
https://via.placeholder.com/1080x1920/16213e/ffffff?text=Screenshot+1 https://via.placeholder.com/1080x1920/16213e/ffffff?text=Screenshot+2
https://via.placeholder.com/1080x1920/16213e/ffffff?text=Screenshot+3

<!-- OG Image -->
https://via.placeholder.com/1200x630/1a1a2e/ffffff?text=MalO+SCP-1471
```

Просто замените в компонентах временно, чтобы проверить верстку.

## 📞 Нужна помощь?

Если не уверены в дизайне:

1. Посмотрите примеры других приложений на Google Play
2. Используйте screenshots от тестовых версий приложения
3. Наймите дизайнера на Fiverr ($10-50 за все изображения)

---

**Совет**: Начните с placeholder'ов, проверьте верстку, затем замените на финальные изображения.
