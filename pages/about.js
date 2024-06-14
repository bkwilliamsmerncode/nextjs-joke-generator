import Link from 'next/link';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Next.js</h1>
        <p className={styles.description}>
          Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.
        </p>
        <Link href="/" className={styles.backLink}>
          Go back to Home
        </Link>
      </main>
    </div>
  );
}