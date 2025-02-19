import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>My Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Logo Design */}
            {/* <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <h4>Logo Design</h4>
                <p>
                  Elevate your brand with a unique and memorable logo. Our
                  expert designers will create a distinctive logo that reflects
                  your business identity and leaves a lasting impression on your
                  audience.
                </p>
              </div>
            </div> */}
            {/* Service Item 1 End */}

            {/* Service Item 2: Web Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop" />
                </div>
                <h4>Custom Web Design</h4>
                <p>
                  Create a stunning online presence with my custom web design
                  services. I will tailor a website that not only looks
                  impressive but also delivers a seamless user experience,
                  helping you achieve your online goals.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}

            {/* Service Item 3: Web Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <h4>Web Development</h4>
                <p>
                  Turn your digital ideas into reality with my web development
                  solutions. I specialize in crafting robust and dynamic
                  websites that are tailored to meet your specific business
                  needs and objectives.
                </p>
              </div>
            </div>
            {/* Service Item 3 End */}

            {/* Service Item 4: Android Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-android" />
                </div>
                <h4>Android Development</h4>
                <p>
                  Leverage the capabilities of Android to create innovative and
                  robust applications. I will build feature-rich and scalable
                  Android apps that offer seamless user experiences and help you
                  stay ahead in the mobile landscape.
                </p>
              </div>
            </div>
            {/* Service Item 4 End */}

            {/* Service Item 5: Desktop Application */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-desktop" />
                </div>
                <h4>Desktop Application</h4>
                <p>
                  Develop powerful and efficient desktop applications tailored
                  to your business needs. I will create solutions that provide a
                  seamless experience across various platforms and enhance your
                  operational efficiency.
                </p>
              </div>
            </div>
            {/* Service Item 5 End */}

            {/* Service Item 6: SEO Optimization */}
            {/* <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-rocket" />
                </div>
                <h4>SEO Optimization</h4>
                <p>
                  Boost your online visibility and drive organic traffic to your
                  website with our SEO optimization services. Our experts employ
                  proven strategies to improve your search engine rankings and
                  grow your online presence.
                </p>
              </div>
            </div> */}
            {/* Service Item 6 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
