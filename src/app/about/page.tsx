import type { NextPage } from "next";
import Image from "next/image";
import aboutPic from "@/assets/images/me.png";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            {/* <div className="section-title padd-15">
              <h2>About Me</h2>
            </div> */}
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  {/* <img
                    src="/imgs/me.png"
                    alt="Profile Pic"
                    className="profilepic shadow-dark"
                    loading='lazy'
                  /> */}
                  <Image
                    src={aboutPic}
                    className="profilepic shadow-dark"
                    loading="lazy"
                    alt="profile"
                  />

                  <div className="row aboutcontent">
                    <h2>
                      I am Sairaj Morajkar a <span>Software Developer</span>
                    </h2>
                    <p>
                      Hi! My name is Sai. I am a dedicated and passionate
                      Flutter and web developer with one year of experience. I
                      have acquired the skills and knowledge necessary to make
                      your project a success. I enjoy every step of the design
                      process, from discussion and collaboration to the final
                      implementation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.saimorajkar.online</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email :<span>saimorajkar123@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BSc.IT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 7798442140</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Sindhudurg</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Nextjs</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "40%" }} />
                        <div className="skill-percent">40%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>HTML CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "30%" }} />
                        <div className="skill-percent">30%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Programming. I have
                            learn Flutter/Dart, Nextjs, Html/css, JavaScript,
                            Python. Now I am a Professional Android & Web
                            Developer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Science - Information Technology
                          </h4>
                          <p className="timeline-text">
                            I began my journey to become a developer in 2020. I
                            have gained my skills and knowledge from Sant Rawool
                            Maharaj Mahavidyalaya, Kudal.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2019
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2019 I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Patgram Anath Bondhu
                            Govt. High School.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Oct 2023 to Jan
                            2024
                          </h6>
                          <h4 className="timeline-title">
                            Flutter Developer @ NextGen Tech
                          </h4>
                          <p className="timeline-text">
                            Since 2019, I have been learning Flutter. Through my
                            experience at NextGen Tech, I have gained extensive
                            knowledge in Flutter, API integrations, Hive, Getx,
                            and PlayStore deployments. I also served as the team
                            lead for the project
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />
                            Jun 2020 to Dec 2020
                          </h6>
                          <h4 className="timeline-title">
                            Flutter Developer @ Infydex
                          </h4>
                          <p className="timeline-text">
                            This was my first internship and laid the foundation
                            for my journey as a developer. Working at a startup
                            taught me to handle various tasks and learn a
                            multitude of skills.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Wordpress</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Wordpress. I can
                            install, Customize, &amp; fix bug on wordpress.{" "}
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
