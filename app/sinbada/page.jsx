"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import sinbada1 from "../../src/assets/images/sinbada/1.png";
import sinbada2 from "../../src/assets/images/sinbada/2.png";
import sinbada3 from "../../src/assets/images/sinbada/3.png";
import "@splidejs/react-splide/css";
import styles from "../../styles/project.module.css";
import Link from "next/link";

export default function Mpj() {
  let images = [sinbada1, sinbada2, sinbada3];

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
        <h1 className={styles.title}>SINBADA: Website Based Inventory System</h1>
      </div>
      <br />
      <br />
      <div className={styles.carouselContainer}>
        <Splide aria-label="My Favorite Images">{carouselImages}</Splide>{" "}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.toolsContainer}>
          <Link href="https://react.dev/">
            <div className={styles.tools}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="react"
              />
              ReactJS
            </div>
          </Link>
          <Link href="https://mui.com/" target="_blank">
            <div className={styles.tools}>
              <img
                src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png"
                alt="MaterialUI"
              />
              MaterialUI
            </div>
          </Link>
          <Link href="https://wordpress.org/" target="_blank">
            <div className={styles.tools}>
              <img
                src="https://i.ibb.co.com/y83ywD2/62c48bbdd884e8c372162223.png"
                alt="RubyOnRails"
              />
              RubyOnRails
            </div>
          </Link>
        </div>
        <br /> We have been tasked with developing an inventory management
        system website for an institution.
        <br />
        This system is designed to streamline the management of items within the
        organization, covering key functions such as procurement, borrowing,
        transfer, and disposal of items.
        <br />
        <br />
        The website is being built using React.js for a responsive and dynamic
        user interface, along with Material-UI (MUI) to ensure a consistent and
        modern design. On the backend, Ruby on Rails is employed to handle the
        server-side logic, ensuring robust and efficient processing of inventory
        data.
        <br />
        <br />
        This system will enable the institution to effectively manage its
        inventory, providing a centralized platform to monitor and control the
        lifecycle of all items, from acquisition to disposal.
        <br />
        <br />
      </div>
    </div>
  );
}
