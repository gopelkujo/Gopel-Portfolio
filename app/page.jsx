import styles from "../styles/index.module.css"

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
          Education
        </span>
        <ul>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Polytechnic State of Bandung </h1>
              <h2>(2019 - 2023)</h2>
            </div>
            <i>Teknik Jurusan Komputer dan Informatika - D4 Teknik Informatika</i><br/>
            With the final project title “Development of Web-Based Book Sales Prediction 
            Application on E-Commerce Markets at PT Periplus Bookindo”
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
        <span className={styles.subTitle}>
          Work Experience
        </span>
        <ul>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Javabook Indonesia</h1>
              <h2>(July 2022 - now)</h2>
            </div>
            <i>Mobile Developer</i><br/>
            Working on develop and maintaining Periplus Apps (Book Store Mobile Application) and Periplus Human Capital (Human Resource Mobile Application) 
            based on Android and iOS using Flutter.
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
        <span className={styles.subTitle}>
          Project
        </span>
        <ul>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Company Profile Web Development PT Multi Piranti Jaya</h1><h2>(Jan 2023 - Mar 2023)</h2>
            </div>
            <i>Project Manager, UI/UX, Frontend Developer</i> <br />
            Develop a company profile website that shows all of the information about the company.
            <div className={styles.tools}>
              <ul>
                <li>React</li>
                <li>MUI</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Headless Wordpress</li>
                <li>Cpanel</li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Inventory System Web Development, SINBADA</h1>
              <h2>(Nov 2022 - Dec 2022)</h2>
            </div>
            <i>Frontend Developer</i><br />
            Develop an inventory system for Administrasi Niaga’s final year student project NAMED SINBADA (Sistem Inventarisasi Barang Daerah).
            <div className={styles.tools}>
              <ul>
                <li>React</li>
                <li>MUI</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Postgre</li>
                <li>Ruby</li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles.experienceTitle}>
              <h1>Inventory System Web Development, SIINVENT</h1>
              <h2>(Apr 2022 - Jun 2022)</h2>
            </div>
            <i>Frontend Developer</i><br />
            Develop an inventory system for Administrasi Niaga’s final year student project NAMED SIINVENT (Sistem Informasi Inventarisasi Dinas).
            <div className={styles.tools}>
              <ul>
                <li>React</li>
                <li>MUI</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>MySQL</li>
                <li>Express</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.aboutMeBox}>
        <h1>A little bit about me</h1>
        <p>
          I love turning beautiful design into an application that user will comfortably use. 
          I like to make the best of my work, deliver a beautiful application, clean code, easy maintain, and clean documentation. 
          New opportunity are welcome!
        </p>
        <footer>— Gopel (nauval) 2024</footer>
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