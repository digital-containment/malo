import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures, { HomepageSkillsHeader } from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            📱 Download App
          </Link>
          <Link className="button button--outline button--lg" to="/docs/intro">
            📖 Documentation
          </Link>
        </div>
        <br />
        <div className="alert alert--warning" role="alert">
          <strong>⚠️ WARNING:</strong> Using SCP-1471 may lead to unpredictable consequences. Install at your own risk.
        </div>
        <br />
        <i>🔒 Object Class: Euclid</i>
        <br />
        <i>🏢 SCP Foundation - Secure, Contain, Protect</i>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="SCP-1471 MalO ver1.0.0 - AI Companion App for Android. Your new friend is always with you.">
      <HomepageHeader />
      <main>
        <HomepageSkillsHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
