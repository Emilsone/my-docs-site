import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '🚀',
    title: 'Set up a Node.js project',
    description: 'Install Node.js and Axios, and structure a basic project ready to make API calls.',
    cta: 'Go to tutorial',
    ctaLink: '/docs/node-setup',
  },
  {
    icon: '📡',
    title: 'Make your first API call',
    description: 'Send a GET request to a live API endpoint and handle the response using Axios.',
    cta: 'Go to tutorial',
    ctaLink: '/docs/tutorial',
  },
  {
    icon: '🐙',
    title: 'Understand the GitHub API',
    description: "Explore GitHub's REST API — repositories, users, issues, and authentication.",
    cta: 'View reference',
    ctaLink: '/docs/intro',
  },
];

function FeatureCard({icon, title, description, cta, ctaLink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
        <Link className={styles.featureCta} to={ctaLink}>
          {cta} →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}