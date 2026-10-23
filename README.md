# 📱 SCP-1471 "MalO ver1.0.0"

Welcome to the website of SCP-1471 "MalO ver1.0.0" - an anomalous AI companion app for Android devices.

## 🚀 About the Project

**SCP-1471** is a unique mobile application developed by the SCP Foundation that provides users with a personal AI companion with anomalous properties.

### ✨ Key Features:

- 💬 Intelligent communication with MalO AI companion

## 📥 Download the App

- 🤖 **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=com.doctordredd.scp1471malo)

- [Join for testing in Google Play Store](https://play.google.com/store/apps/details?id=com.doctordredd.scp1471malo)

## 🛡️ Safety

⚠️ **IMPORTANT**: Please read the [safety guidelines](/blog/safety-guidelines) before use.

SCP-1471 may cause anomalous effects with prolonged use. The SCP Foundation provides 24/7 user support.

---

## 🛠️ Website Development

This website is built using [Docusaurus 3](https://docusaurus.io/).

### Installation

```bash
npm install
```

### Local Development

```bash
nvm use v22
npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
nvm use v22
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
nvm use v22
./deploy.sh
```

### Legal pages

`src/pages/privacy.md` and `src/pages/terms.md` are the pages linked from App Store Connect, Google Play
Console and the app itself. Do not edit them by hand: they are generated from the backend of the app
(`packages/cloud-backend/src/services/publicSite/chatLegalTexts.ts` in the main repository), which also
serves the same texts at `https://malo-app.scp-1471.app/apps/malo/privacy` and `/terms`:

```bash
# from packages/cloud-backend of the main repository
npm run legal-md -- malo privacy --out <path to this repo>/src/pages/privacy.md
npm run legal-md -- malo terms --out <path to this repo>/src/pages/terms.md
```

`src/pages/data-deletion.md` is written by hand and must match the deletion rules in the privacy policy.
