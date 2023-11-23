import Head from "next/head"
import styles from "../styles/index.module.css"
import gopelImage from "../src/assets/images/gopel-sleepy.png"
import Image from "next/image"

export default function Home() {
  const description = "Hi👋🏻 My name is Nauval (a.k.a Gopel). I'am a profesional Web & Mobile Developer, but recently i do some desktop project. My passion is to translate the design into a real interface that user can use. I love design too, but i don't fit too much as a designer coz my design is based on my mood ehe✌🏻. Welcome to my portfolio! enjoy☕"
  return (
    <>
      <Head>
        <title>Gopel&apos;s Work</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.profileImage}/>
        <span className={styles.description}>
          {description}
        </span>
      </div>
      <span className={styles.comingSoon}>
        Built in Next JS and deploy on Vercel, with ❤ Take a tour to this project on <a href="https://github.com/gopelkujo/Gopel-Portfolio" target="_blank" rel="noopener noreferrer">Github</a>
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