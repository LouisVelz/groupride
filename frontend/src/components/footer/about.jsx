import React from "react";
import '../../stylesheets/footer_pages/about.scss'

class About extends React.Component {
    render() {
        return (
          <div id="footer-background">
            <section className="about">
              <div id="about-div1">
                <h2>About GroupRide</h2>
                <div id="about-div2">
                  <p>GroupRide is an event creating web app made for Bikers.</p>
                  <p>
                    Going on the road by yourself is always dangerous, no matter
                    what type of bicycle you are riding.
                  </p>
                  <p>
                    GroupRide allows Bikers to organize events that let friends,
                    family, and others to join you to turn your solo ride into a
                    group marathon!
                  </p>
                </div>
              </div>
              <div id="about-div1">
                <h2>Our Mission</h2>
                <div id="about-div2">
                    <p>GroupRide makes being a single Rider more enjoyable and rewarding by connecting to people who may not have otherwise met in real life.</p>
                    <p>We make pairing and creating ride events easy so that people can connect and ride bikes with each other. </p>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default About;