import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import TopGradient from '../components/TopGradient';
import Hello from '../components/Hello';
import Resume from '../components/Resume';
import Experience from '../components/Experience';
import Sidebar from '../components/Sidebar';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';


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

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Pedrosa Projects" />
        <meta property="og:description" content="A website about me." />
        <meta property="og:image" content="https://lucaspedrosa.vercel.app/screenshot_index.jpg" />
        <meta property="og:url" content="https://lucaspedrosa.vercel.app/" />
        <meta name="twitter:image:alt" content="Printscreen of the website." />
        <meta name="twitter:card" content="summary_large_image" />

        <script async 
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`} />
        
        <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
        />
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
