import Image from "next/image";
import proflie from "@/assets/images/home-pic.png";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            {/* <img
              src="/imgs/home-pic.png"
              alt="Profile Picture"
              className="shadow-dark"
              loading='lazy'
            /> */}
            <Image
              src={proflie}
              className="shadow-dark"
              loading="lazy"
              alt="profile"
            />
            <h1>Sairaj Morajkar</h1>
            <p>Flutter Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
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
        </div>
      </section>
    </main>
  );
}
