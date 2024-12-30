import styles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";

// Import PHC images
import PhcIcon from "../src/assets/images/phc/icon.jpg";
import PhcLogin from "../src/assets/images/phc/login.png";
import PhcHome from "../src/assets/images/phc/home.png";
import PhcAttendance from "../src/assets/images/phc/attendance.png";
import PhcAttendanceForm from "../src/assets/images/phc/attendance_form.png";
import PhcNotification from "../src/assets/images/phc/notification.png";
import PhcProfile from "../src/assets/images/phc/profile.png";
import AppStoreBadge from "../src/assets/images/app_store_badge.svg";
import GooglePlayBadge from "../src/assets/images/google_play_badge.png";

// Import Periplus Apps images
import PPlusIcon from "../src/assets/images/periplus_apps/icon.jpeg";
import PPlusHome from "../src/assets/images/periplus_apps/home.png";
import PPlusCategory from "../src/assets/images/periplus_apps/category.png";
import PPlusLogin from "../src/assets/images/periplus_apps/login.png";
import PPlusProfile from "../src/assets/images/periplus_apps/profile.png";
import PPlusBook from "../src/assets/images/periplus_apps/book.png";
import PPlusCart from "../src/assets/images/periplus_apps/cart.png";
import PPlusPayment from "../src/assets/images/periplus_apps/payment.png";
import PPlusTransaction from "../src/assets/images/periplus_apps/transaction.png";

// Import Multi Piranti Jaya images
import MpjIcon from "../src/assets/images/mpj2/icon.png";
import MpjHome1 from "../src/assets/images/mpj2/home_1.png";
import MpjHome2 from "../src/assets/images/mpj2/home_2.png";
import MpjHome3 from "../src/assets/images/mpj2/home_3.png";
import MpjHome4 from "../src/assets/images/mpj2/home_4.png";
import MpjHome5 from "../src/assets/images/mpj2/home_5.png";
import MpjAbout from "../src/assets/images/mpj2/about.png";
import MpjActivity from "../src/assets/images/mpj2/activity.png";
import MpjService from "../src/assets/images/mpj2/service.png";
import MpjContactUs from "../src/assets/images/mpj2/contact_us.png";

export default function Home() {
  const greetingText = "Hello, nice to meet you. I am Gopel!";

  const introductionText =
    "Hey! I'm a front-end web and mobile developer with a passion for turning \
    beautiful designs into user-friendly apps. I really enjoy coding because, \
    let's be real, it just looks cool to me, haha. When I'm not busy with \
    code, you'll probably find me out exploring nature on my motorcycle ─ it's \
    the perfect escape!";

  const phcImages = [
    { img: PhcLogin, alt: "Login Page" },
    { img: PhcHome, alt: "Home Page" },
    { img: PhcAttendance, alt: "Attendance Page" },
    { img: PhcAttendanceForm, alt: "Attendance Form Page" },
    { img: PhcNotification, alt: "Notification Page" },
    { img: PhcProfile, alt: "Profile Page" },
  ];

  const pplusImages = [
    { img: PPlusHome, alt: "Home" },
    { img: PPlusCategory, alt: "Category" },
    { img: PPlusLogin, alt: "Login" },
    { img: PPlusProfile, alt: "Profile" },
    { img: PPlusBook, alt: "Book" },
    { img: PPlusCart, alt: "Cart" },
    { img: PPlusPayment, alt: "Payment" },
    { img: PPlusTransaction, alt: "Transaction" },
  ];

  const mpjImages = [
    { img: MpjHome1, alt: "Home 1" },
    { img: MpjHome2, alt: "Home 2" },
    { img: MpjHome3, alt: "Home 3" },
    { img: MpjHome4, alt: "Home 4" },
    { img: MpjHome5, alt: "Home 5" },
    { img: MpjAbout, alt: "About" },
    { img: MpjActivity, alt: "Activity" },
    { img: MpjService, alt: "Service" },
    { img: MpjContactUs, alt: "Contact Us" },
  ];

  function BuildHeader() {
    return (
      <div className={styles.greetContainer}>
        <div className={styles.greetAndTourTextContainer}>
          <span className={styles.greetText}>{greetingText}</span>
          <span className={styles.takeATourText}>{introductionText}</span>
        </div>
        <div className={styles.profileImage} />
      </div>
    );
  }

  function BuildWorks({
    icon,
    title,
    description,
    appstoreLink,
    playstoreLink,
    websiteLink,
    techs,
    images,
  }) {
    return (
      <div className={styles.worksBox}>
        <div className={styles.worksBoxtitle}>
          <Image src={icon} alt="logo" className={styles.worksBoxIcon} />
          <div className={styles.worksBoxtitleDesc}>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          {appstoreLink == null &&
          playstoreLink == null &&
          websiteLink == null ? null : (
            <div className={styles.worksBoxStore}>
              {appstoreLink ? (
                <Link
                  href={appstoreLink}
                  target="_blank"
                  style={{ marginRight: "0.5rem" }}
                >
                  <Image
                    src={AppStoreBadge}
                    alt="Google Play Store Icon"
                    width={100}
                    height={500}
                  />
                </Link>
              ) : null}
              {playstoreLink != null ? (
                <Link href={playstoreLink} target="_blank">
                  <Image
                    src={GooglePlayBadge}
                    alt="Google Play Store Icon"
                    width={115}
                    height={100}
                    loading="lazy"
                  />
                </Link>
              ) : null}
              {websiteLink != null ? (
                <Link
                  href={websiteLink}
                  target="_blank"
                  className={styles.visitWebsiteBox}
                >
                  Visit Website
                </Link>
              ) : null}
            </div>
          )}
        </div>
        <div className={styles.worksBoxTech}>
          <ul>
            {techs.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.worksBoxImages}>
          {images.map((item, index) => {
            return <Image key={index} src={item.img} alt={item.alt} />;
          })}
        </div>
      </div>
    );
  }

  function BuildOtherWorks() {
    function BuildItem({ url, title, desc, stacks }) {
      return (
        <Link href={url}>
          <div className={styles.projectBox}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className={styles.tools}>
              <ul>
                {stacks.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </Link>
      );
    }

    return (
      <div className={styles.experienceBox}>
        <span className={styles.subTitle}>Other Project</span>
        <br />
        <div className={styles.projectContainer}>
          <BuildItem
            url="/sinbada"
            title="SINBADA"
            desc="Inventory system website based on ReactJS and Ruby."
            stacks={["ReactJS", "MUI"]}
          />
          <BuildItem
            url="/siinvent"
            title="SIINVENT"
            desc="Inventory system website based on ReactJS and ExpressJS."
            stacks={["ReactJS", "MUI"]}
          />
          <BuildItem
            url="#"
            title="Goras Ludo Games"
            desc="My team project at first year in collage. Goras Ludo Games is a board game that is similar to playing snakes and ladders."
            stacks={["C"]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <BuildHeader />
      <BuildWorks
        icon={PPlusIcon}
        title="Periplus"
        description="Periplus online bookstore, 10k+ total downloads."
        appstoreLink="https://apps.apple.com/id/app/periplus/id6444208499"
        playstoreLink="https://play.google.com/store/apps/details?id=com.bookindo.periplus.periplus&hl=en"
        techs={["Figma, Flutter, Firebase, Midtrans"]}
        images={pplusImages}
      />
      <BuildWorks
        icon={PhcIcon}
        title="Periplus Human Capital"
        description="An application for employee management, mainly for employee
              attendance. Published privately on App Store and Play Store."
        techs={["Figma, Flutter, Firebase, Geolocation"]}
        images={phcImages}
      />
      <BuildWorks
        icon={MpjIcon}
        title="Multi Piranti Jaya"
        description="Profile company website of Multi Piranti Jaya."
        websiteLink="https://multipirantijaya.com/"
        techs={["React JS, MUI, Wordpress, Javascript"]}
        images={mpjImages}
      />
      <BuildOtherWorks />
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
