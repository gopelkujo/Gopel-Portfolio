import Head from "next/head"
import styles from "../styles/index.module.css"
import gopelImage from "../src/assets/images/gopel-sleepy.png"
import Image from "next/image"

export default function Home() {
  const greet = "Hello, nice to meet you. I am Gopel!";
  const takeATour = "Let's take a look about my professional experience...";
  return (
    <div className={styles.pageContainer}>
      <div className={styles.greetContainer}>
        <div className={styles.greetAndTourTextContainer}>
          <span className={styles.greetText}>
            {greet}
          </span>
          <span className={styles.takeATourText}>
            {takeATour}
          </span>
        </div>
        <div className={styles.profileImage} />
      </div>
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>
          Work Experience
        </span>
        <ul>
          <li>Mobile Developer - Javabook Indonesia (July 2022 - now)</li>
        </ul>
      </div>
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>
          Project
        </span>
        <ul>
          <li>Company Profile Web Development, PT Multi Piranti Jaya (Jan 2023 - Mar 2023)</li>
          <li>Inventory System Web Development, SINBADA: Sistem Inventarisasi Barang Daerah (Nov 2022 - Dec 2022)</li>
          <li>Inventory System Web Development, SIINVENT: Sistem Informasi Inventarisasi Dinas (Apr 2022 - Jun 2022)</li>
        </ul>
      </div>
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