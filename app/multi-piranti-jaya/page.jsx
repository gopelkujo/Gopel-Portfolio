"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import mpj1 from "../../src/assets/images/mpj/1.png";
import mpj2 from "../../src/assets/images/mpj/2.png";
import mpj3 from "../../src/assets/images/mpj/3.png";
import mpj4 from "../../src/assets/images/mpj/4.png";
import mpj5 from "../../src/assets/images/mpj/5.png";
import mpj6 from "../../src/assets/images/mpj/6.png";
import mpj7 from "../../src/assets/images/mpj/7.png";
import "@splidejs/react-splide/css";
import styles from "../../styles/project.module.css";

export default function Mpj() {
  let images = [mpj1, mpj2, mpj3, mpj4, mpj5, mpj6, mpj7];

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
        <h1>Multi Piranti Jaya Company Profile Website Development</h1>
      </div>
      <br />
      <br />
      <div className={styles.carouselContainer}>
        <Splide aria-label="My Favorite Images">{carouselImages}</Splide>{" "}
      </div>
      <div className={styles.contentContainer}>
        <br />
        Multi Piranti Jaya approached us to revamp their outdated company
        profile website.
        <br />
        Their existing website had not been updated for some time, and they
        requested a more modern and contemporary design that meets today&rsquo;s
        standards.
        <br />
        <br />
        We were tasked with creating a new, responsive website using React.js to
        build a dynamic user interface, and Material-UI (MUI) to ensure a
        consistent and visually appealing design. We integrated WordPress CMS to
        allow for easy content management, enabling Multi Piranti Jaya to
        regularly update their site&rsquo;s information. Hosting and management
        of the website are handled via cPanel, providing full control over
        server operations.
        <br />
        <br />
        Throughout the project, we maintained close communication with Multi
        Piranti Jaya, providing regular updates and ensuring that all
        specifications and requirements were met at each stage of development.
        <br />
        <br />
        <h1>Tools</h1>
        <ul>
          <li>React JS</li>
          <li>MUI</li>
          <li>Wordpress CMS</li>
        </ul>
      </div>
    </div>
  );
}
