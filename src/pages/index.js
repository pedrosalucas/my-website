import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Hello from '../components/Hello';
import Resume from '../components/Resume';
import Experience from '../components/Experience';
import ProjectsSection from '../components/ProjectsSection';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import React from 'react';
import TopGradient from '../components/TopGradient';


export default function Home() {

  return (
    <div className={styles.fullPage} id="fullPage">
      <Head>
        <title>LuPe Projects</title>
        <meta name="description" content="A website portfolio about me." />
        <meta name="robots" content="index, nofollow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Lucas Pedrosa Projects" />
        <meta property="og:description" content="A website about me." />
        {/* <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg" /> */}
        {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm" /> */}
        <meta name="twitter:image:alt" content="Printscreen of the website." />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div id="overlay-menu" className={styles.overlay}></div>

      <main className={styles.main}>
        <TopGradient />
        
        <section className={styles.about}>
          <Hello  className={styles.hello} />

          <Resume className={styles.resume} />

          <Experience className={styles.experience} />

          <Sidebar className={styles.sidebar} />
        </section>

        <ProjectsSection className={styles.projectsSection} />

      </main>

      <Footer className={styles.footer}/>
    </div>
  )
}
