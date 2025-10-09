/**
 * Главная страница сайта MalO - лендинг для SCP-1471 приложения
 * Собран из модульных компонентов для лучшей поддерживаемости
 */
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Импорт всех компонентов лендинга
import { Hero, Features, HowItWorks, Screenshots, FAQ, FinalCTA, LandingFooter, StickyMobileCTA } from "@site/src/components/LandingPage";

/**
 * Главный компонент страницы
 */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="MalO — SCP-1471 Chat App for Android | Fan-Made"
      description="Chat with MalO (SCP-1471) on Android. Atmospheric messenger-style experience, fan-made, privacy-friendly. Download now from Google Play."
    >
      {/* Основной контент без стандартной обертки Layout */}
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <FAQ />
      <FinalCTA />
      <LandingFooter />

      {/* Липкая CTA кнопка для мобильных (появляется при скролле) */}
      <StickyMobileCTA />
    </Layout>
  );
}
