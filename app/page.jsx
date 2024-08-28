import styles from "../styles/index.module.css";
import Link from "next/link";

export default function Home() {
  const greet = "Hello, nice to meet you. I am Gopel!";
  const takeATour =
    "Hey! I'm a front-end web and mobile developer with a passion for turning beautiful designs into user-friendly apps. I really enjoy coding because, let's be real, it just looks cool to me, haha. When I'm not busy with code, you'll probably find me out exploring nature on my motorcycle ─ it's the perfect escape!";
  return (
    <div className={styles.pageContainer}>
      <div className={styles.greetContainer}>
        <div className={styles.greetAndTourTextContainer}>
          <span className={styles.greetText}>{greet}</span>
          <span className={styles.takeATourText}>{takeATour}</span>
        </div>
        <div className={styles.profileImage} />
      </div>
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>Education</span>
        <ul>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Polytechnic State of Bandung </h1>
              <h2>(2019 - 2023)</h2>
            </div>
            <i>
              Teknik Jurusan Komputer dan Informatika - D4 Teknik Informatika
            </i>
            <br />
            With the final project title “Development of Web-Based Book Sales
            Prediction Application on E-Commerce Markets at PT Periplus
            Bookindo”
            <div className={styles.tools}>
              <ul>
                <li>React</li>
                <li>Python</li>
                <li>Mysql</li>
                <li>Machine Learning</li>
                <li>Multiple Linear Regression</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>Work Experience</span>
        <ul>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Javabook Indonesia</h1>
              <h2>(July 2022 - now)</h2>
            </div>
            <i>Mobile Developer</i>
            <br />
            Working on develop and maintaining Periplus Apps (Book Store Mobile
            Application) and Periplus Human Capital (Human Resource Mobile
            Application) based on Android and iOS using Flutter.
            <div className={styles.tools}>
              <ul>
                <li>Flutter</li>
                <li>iOS</li>
                <li>Android</li>
                <li>Android Studio</li>
                <li>Xcode</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>Project</span>
        <br />
        <div className={styles.projectContainer}>
          <Link
            href='/multi-piranti-jaya'
          >
            <div className={styles.projectBox}>
              <h1>Multi Piranti Jaya</h1>
              <p>Company profile website based on ReactJS and Wordpress CMS.</p>
              <div className={styles.tools}>
                <ul>
                  <li>ReactJS</li>
                  <li>MUI</li>
                </ul>
              </div>
            </div>
          </Link>
          <div className={styles.projectBox}>
            <h1>SINBADA</h1>
            <p>Inventory system website based on ReactJS and Ruby.</p>
            <div className={styles.tools}>
              <ul>
                <li>ReactJS</li>
                <li>MUI</li>
              </ul>
            </div>
          </div>
          <div className={styles.projectBox}>
            <h1>SIINVENT</h1>
            <p>Inventory system website based on ReactJS and ExpressJS.</p>
            <div className={styles.tools}>
              <ul>
                <li>ReactJS</li>
                <li>MUI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.quoteBox}>
        <p>
          &quot;When you arise in the morning, think of what a precious
          privilege it is to be alive - to breathe, to think, to enjoy, to
          love.&quot;
        </p>
        <footer>— Aurelius, Marcus</footer>
      </div>
    </div>
  );
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
