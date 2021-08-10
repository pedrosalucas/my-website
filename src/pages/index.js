import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Hello from '../components/Hello';
import Resume from '../components/Resume';
import Experience from '../components/Experience';
import Knowledge from '../components/Knowledge';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import React from 'react';


export default function Home() {

  return (
    <div className={styles.fullPage} id="fullPage">
      <Head>
        <title>My Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={styles.main}>
        <div>
          <Hello  className={styles.hello} />

          <Resume className={styles.resume} />

          <Experience className={styles.experience} />
        </div>

        <Knowledge  className={styles.knowledge} />

        <Sidebar className={styles.sidebar} />
      </main>

      <Footer className={styles.footer}/>
    </div>
  )
}
