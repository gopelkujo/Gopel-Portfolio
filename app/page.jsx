import Head from "next/head";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gopel&apos;s Work</title>
      </Head>
      <div className={styles.container}>
        <span className={styles.highlight}>
          Hello world!<br />
        </span>
        <span className={styles.description}>
          I&apos;m <a href="https://www.linkedin.com/in/gopel-kujo/" target="_blank">Gopel</a>, welcome to my portfolio website.
        </span>
      </div>
      <span className={styles.comingSoon}>
        coming soon🙈
      </span>
    </>
  )
}

/* 
 * Page Routing Note
 *
 * Page route based on folder in top-level folder "app".
 * Structure: 
 *  /app:
 *      /contact (folder)
 *        /page.jsx (file as contact code)
 * Example route: localhost:3000/contact
 * 
*/

/*
 * Assets Note
 * Add folder "src" in top-level folder to keep assets files
 * Example:
 *  /src:
 *    /images
 *      /image.png
 *    /styles
 *      /globals.css
*/