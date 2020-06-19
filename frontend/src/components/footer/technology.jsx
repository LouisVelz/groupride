import React from "react";
import '../../stylesheets/footer_pages/technology.scss'
import mongoDB from "../images/mongodb.png";
import expressJS from "../images/expressjs.png";
import reactJS from "../images/reactjs.svg";
import nodeJS from "../images/nodejs.svg";
import gMaps from "../images/googlemaps.png";
import fontAwe from "../images/fontawe.svg";

class Technology extends React.Component {
    render() {
        return (
          <div id="footer-background">
            <section className="tech">
              <div id="tech-div">
                <h2 className="tech-title">Technology</h2>
                <div className="tech-content">
                  <p>Backend</p>
                  <p>Frontend</p>
                </div>
                <section className="split-icon">
                  <div id="tech-mongo">
                    <img
                      src={mongoDB}
                      className="tech-mern-img"
                      alt="MongoDB"
                    />
                  </div>
                  <div id="tech-express">
                    <img
                      src={expressJS}
                      className="tech-mern-img"
                      alt="ExpressJS"
                    />
                  </div>
                  <div id="tech-react">
                    <img
                      src={reactJS}
                      className="tech-mern-img"
                      alt="ReactJS"
                    />
                  </div>
                  <div id="tech-node">
                    <img src={nodeJS} className="tech-mern-img" alt="NodeJS" />
                  </div>
                </section>
                <div id="other-container">
                  <div id="other-context">
                    <p>Included Libraries</p>
                  </div>
                  <div className="tech-google-img">
                    <img src={gMaps} alt="google maps" />
                    <img src={fontAwe} alt="font awe" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Technology;

