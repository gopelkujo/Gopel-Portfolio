// These styles apply to every route in the application
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import linkedinIco from "../src/assets/images/linkedin-ico.png";
import githubIco from "../src/assets/images/github-ico.png";
import xIco from "../src/assets/images/x-ico.png";
import gmailIco from "../src/assets/images/gmail.png";
import Link from "next/link";

export const metadata = {
  title: "gopelkujo",
  description: "my professional journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.baseLayout}>
          <div className={styles.menuContainer}>
            <div className={styles.menuContent}>
              <Link href="/">
                <h1>gopelkujo</h1>
              </Link>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gopel-kujo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIco.src} alt="Linked In" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gopelkujo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubIco.src} alt="Github" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/kujoowannabee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={xIco.src} alt="X" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mn.dwisatya@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gmailIco.src} alt="gmail" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {children}
          <span className={styles.footer}>
            Built in Next JS and deploy on Vercel, with ❤ Take a tour of this
            project on{" "}
            <a
              href="https://github.com/gopelkujo/gopelkujo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </div>
      </body>
    </html>
  );
}
