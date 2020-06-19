import React from "react";
import "../../stylesheets/footer_pages/team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


class Team extends React.Component {
    render() {
        return (
          <div id="footer-background">
            <section className="team">
              <div id="team-ul">
                <h2 className="team-title">Meet our team</h2>
                <div className="team-members" id="member-1">
                  <h3>-Team Leader and Product Management-</h3>
                  <h4>Louis Velazquez</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/louis-velazquez-bb63085a/">
                      <FontAwesomeIcon icon={faLinkedin} />
                      LinkedIn
                    </a>
                    <a href="https://github.com/LouisVelz">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="team-members" id="member-2">
                  <h3>-Backend Lead-</h3>
                  <h4>Elvin Valette</h4>
                  <div id="team-links">
                    <a href="www.linkedin.com/in/elvin-valette-5b2945a5">
                      <FontAwesomeIcon icon={faLinkedin} />
                      LinkedIn
                    </a>
                    <a href="https://github.com/elvinv123">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="team-members" id="member-3">
                  <h3>-Frontend Lead-</h3>
                  <h4>Roman Gontcharov</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/roman-gontcharov-7705856a/">
                      <FontAwesomeIcon icon={faLinkedin} />
                      LinkedIn
                    </a>
                    <a href="https://github.com/remm9">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="team-members" id="member-4">
                  <h3>-Flex [ Frontend & Backend ]-</h3>
                  <h4>Ricky Zheng</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/rickyzhengs/">
                      <FontAwesomeIcon id="foot-icon" icon={faLinkedin} />
                      LinkedIn
                    </a>
                    <a href="https://github.com/lordrickyz">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Team;