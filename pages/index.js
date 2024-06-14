import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/index.module.css';

export default function Home() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await res.json();
    setJoke(data.setup + ' ' + data.punchline);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p className={styles.description}>This is the home page.</p>
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Learn more about Next.js on this page.</p>
          </Link>
        </div>
        <button className={styles.button} onClick={fetchJoke}>
          Fetch a Random Joke
        </button>
        {joke && <p className={styles.joke}>{joke}</p>}
      </main>
    </div>
  );
}