// These styles apply to every route in the application
import '../styles/globals.css'
import styles from '../styles/layout.module.css'
import linkedinIco from '../src/assets/images/linkedin-ico.png'
import githubIco from '../src/assets/images/github-ico.png'
import xIco from '../src/assets/images/x-ico.png'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.baseLayout}>
          <div className={styles.menuContainer}>
            <h1>gopelkujo</h1>
            <ul>
              <li><img src={linkedinIco.src} alt="Linked In"/><a href="https://www.linkedin.com/in/gopel-kujo/" target="_blank" rel="noopener noreferrer">/gopel-kujo</a></li>
              <li><img src={githubIco.src} alt="Github" /><a href="https://github.com/gopelkujo" target="_blank" rel="noopener noreferrer">/gopelkujo</a></li>
              <li><img src={xIco.src} alt="X" /><a href="https://twitter.com/kujoowannabee" target="_blank" rel="noopener noreferrer">/kujoowannabee</a></li>
            </ul>
          </div>
          {children}
          <span className={styles.footer}>
            Built in Next JS and deploy on Vercel, with ❤ Take a tour of this project on <a href="https://github.com/gopelkujo/gopelkujo.com" target="_blank" rel="noopener noreferrer">Github</a>
          </span>
        </div>
      </body>
    </html>
  )
}