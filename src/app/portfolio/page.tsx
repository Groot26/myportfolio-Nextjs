import type { NextPage } from "next";
import Image from "next/image";
import p1 from "@/assets/images/portfolio/P1.png";
import p2 from "@/assets/images/portfolio/P2.png";
import p3 from "@/assets/images/portfolio/P3.png";
import p4 from "@/assets/images/portfolio/P4.png";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          {/* <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div> */}
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  {/* <img src="/imgs/portfolio/P1.png" alt="portfolio" /> */}
                  <Image
                    src={p1}
                    loading="lazy"
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Desktop Application</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image
                    src={p2}
                    loading="lazy"
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Mobile Application</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image
                    src={p3}
                    loading="lazy"
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Web Development</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                <Image
                    src={p4}
                    loading="lazy"
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Web Development</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            {/* <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/5.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Wordpress</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            {/* <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/6.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Web Design</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
