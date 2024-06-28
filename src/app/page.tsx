"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import batman from "@/assets/images/batman.jpg";
import proflie from "@/assets/images/home-pic.png";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <section className="home section" id="home">
        <div className="container">

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - size / 2}px ${
            (y ?? 0) - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        {/* <section
          className="home section"
          id="home"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="container"> */}
            <div className="intro"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}>
              <Image
                src={batman}
                className="shadow-dark"
                loading="lazy"
                alt="Batman"
              />
              <h1>Sai Morajkar</h1>
              <p>I m Batman</p>
              <div className="social-links">
                <a href="https://facebook.com/sai._.morajkar" target="_blank">
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a href="https://github.com/Groot26" target="_blank">
                  <i className="fa fa-github fa-lg" />
                </a>
                <a href="https://instagram.com/sai._.morajkar" target="_blank">
                  <i className="fa fa-instagram fa-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/sairaj-morajkar/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-lg" />
                </a>
              </div>
            </div>
          {/* </div>
        </section> */}
      </motion.div>

      <div className={styles.body}>
        {/* <section className="home section" id="home">
          <div className="container"> */}
            <div className="intro">
              <Image
                src={proflie}
                className="shadow-dark"
                loading="lazy"
                alt="Profile"
              />
              <h1>Sairaj Morajkar</h1>
              <p>Software Developer</p>
              <div className="social-links">
                <a href="https://facebook.com/sai._.morajkar" target="_blank">
                  <i className="fa fa-facebook fa-lg" />
                </a>
                <a href="https://github.com/Groot26" target="_blank">
                  <i className="fa fa-github fa-lg" />
                </a>
                <a href="https://instagram.com/sai._.morajkar" target="_blank">
                  <i className="fa fa-instagram fa-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/sairaj-morajkar/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin fa-lg" />
                </a>
              </div>
            </div>
          {/* </div>
        </section> */}
      </div>
      </div>
      </section>
    </main>
  );
}
