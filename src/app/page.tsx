
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/me.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Sairaj Morajkar</h1>
            <p>Software Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              <a href="https://facebook.com/sai._.morajkar" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/Groot26" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/sai._.morajkar" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/sairaj-morajkar/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
