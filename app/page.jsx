import Head from "next/head"
import styles from "../styles/index.module.css"
import gopelImage from "../src/assets/images/gopel-sleepy.png"
import Image from "next/image"

export default function Home() {
  const description = "Hi👋🏻 My name is Nauval (a.k.a Gopel). I'am a profesional Web & Mobile Developer, but recently i do some desktop project too. My passion is to translate the design into a real interface that user can use the goods as comfortably as possible. I love design too, but i don't fit too much as a designer coz my design is based on my mood ehe✌🏻. I currently work as Mobile Developer for Javabook Indonesia onsite at East Jakarta, Indonesia. Welcome to my page! enjoy☕"
  const greet = "Hello, nice to meet you. I am Gopel!";
  return (
    <div className={styles.container}>
      <div className={styles.profileImage} />
      <span className={styles.greetText}>
        {greet}
      </span>
      {/* <span className={styles.description}>
        {description}
      </span> */}
    </div>
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