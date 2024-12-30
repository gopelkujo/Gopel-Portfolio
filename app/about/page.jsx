import styles from "../../styles/index.module.css";

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>

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
    </div>
  );
}
