import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Learn How Developer Documentation Works
      </h1>
      <p className={styles.heroSub}>
      Explore a hands-on Axios tutorial and a GitHub REST API reference to see how real-world developer documentation is written and structured.
      </p>
      <div className={styles.btnRow}>
        <Link className={styles.btnPrimary} to="/docs/intro">
          Read the Guide →
        </Link>

      </div>
    </div>
  );
}

// function LearnSection() {
//   return (
//     <div className={styles.learnSection}>
//       <p className={styles.sectionLabel}>Where to go next</p>
//       <div className={styles.learnGrid}>
//         <div className={styles.learnCard}>

//           <h3>Make your first API call with Axios in Node.js</h3>
//           <p>
//             A step-by-step walkthrough for beginners. You will go from a blank
//             folder to a working Node.js script that fetches live data from an API.
//           </p>
//           <ul className={styles.learnList}>
//             <li>Install Node.js and Axios</li>
//             <li>Send a GET request and read the response</li>
//             <li>Pass query parameters and headers</li>
//             <li>Handle errors with try/catch</li>
//           </ul>
//           <Link className={styles.btnOutline} to="/docs/tutorial">
//             Start the tutorial →
//           </Link>
//         </div>
//         <div className={styles.learnCard}>
//           <h3>GitHub REST API reference</h3>
//           <p>
//             A structured reference covering the GitHub REST API endpoints used
//             in the tutorial, with request examples and response breakdowns.
//           </p>
//           <ul className={styles.learnList}>
//             <li>GET /users/&#123;username&#125; — fetch a user profile</li>
//             <li>GET /repos/&#123;owner&#125;/&#123;repo&#125; — fetch a repository</li>
//             <li>Rate limits and error responses</li>
//           </ul>
//           <Link className={styles.btnOutline} to="/docs/api-reference">
//             View API reference →
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="WeatherAPI documentation">
      <main className={styles.main}>
        <Hero />
        <HomepageFeatures />
        {/* <LearnSection /> */}
      </main>
    </Layout>
  );
}