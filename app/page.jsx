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
