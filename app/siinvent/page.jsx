"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import siinvent1 from "../../src/assets/images/siinvent/1.png";
import siinvent2 from "../../src/assets/images/siinvent/2.png";
import reactLogo from "../../src/assets/images/reactjs.png";
import muiLogo from "../../src/assets/images/mui.png";
import expressLogo from "../../src/assets/images/expressjs.png"
import "@splidejs/react-splide/css";
import styles from "../../styles/project.module.css";
import Link from "next/link";

export default function Siinvent() {
  let images = [siinvent1, siinvent2];

  const carouselImages = images.map((val) => (
    <SplideSlide key={val.src}>
      <img src={val.src} alt="Image 1" width="100%" height="100%" />
    </SplideSlide>
  ));

  return (
    <div>
      <br />
      <br />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          SIINVENT: Website Based Inventory System
        </h1>
      </div>
      <br />
      <br />
      <div className={styles.carouselContainer}>
        <Splide aria-label="My Favorite Images">{carouselImages}</Splide>{" "}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.toolsContainer}>
          <Link href="https://react.dev/" target="_blank">
            <div className={styles.tools}>
              <img
                src={reactLogo.src}
                alt="react"
              />
              ReactJS
            </div>
          </Link>
          <Link href="https://mui.com/" target="_blank">
            <div className={styles.tools}>
              <img
                src={muiLogo.src}
                alt="MaterialUI"
              />
              MaterialUI
            </div>
          </Link>
          <Link href="https://expressjs.com/" target="_blank">
            <div className={styles.tools}>
              <img
                src={expressLogo.src}
                alt="ExpressJS"
              />
              ExpressJS
            </div>
          </Link>
        </div>
        <p>
          <br /> We have been tasked with developing an inventory management
          system website for an institution.
          <br />
          This system is designed to streamline the management of items within
          the organization, covering key functions such as procurement,
          borrowing, transfer, and disposal of items.
          <br />
          <br />
          The website is being built using React.js for a responsive and dynamic
          user interface, along with Material-UI (MUI) to ensure a consistent
          and modern design. On the backend, Express JS is employed to handle
          the server-side logic, ensuring robust and efficient processing of
          inventory data.
          <br />
          <br />
          This system will enable the institution to effectively manage its
          inventory, providing a centralized platform to monitor and control the
          lifecycle of all items, from acquisition to disposal.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
