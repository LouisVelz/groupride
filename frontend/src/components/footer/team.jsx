import React from "react";
import "../../stylesheets/footer_pages/team.scss";

class Team extends React.Component {
    render() {
        return (
          <div id="footer-background">
            <section className="team">
              <div id="team-ul">
                <h2 className="team-title">Meet our team</h2>
                <div className="team-members">
                  <h3>Team Leader and Product Management</h3>
                  <h4>Louis Velazquez</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/louis-velazquez-bb63085a/">
                      LinkedIn
                    </a>
                    <a href="https://github.com/LouisVelz">GitHub</a>
                  </div>
                </div>
                <div className="team-members">
                  <h3>Backend Lead (Backend Auth, Routing and Map API)</h3>
                  <h4>Elvin Valette</h4>
                  <div id="team-links">
                    <a href="www.linkedin.com/in/elvin-valette-5b2945a5">
                      LinkedIn
                    </a>
                    <a href="https://github.com/elvinv123">GitHub</a>
                  </div>
                </div>
                <div className="team-members">
                  <h3>
                    Frontend lead (Frontend Auth, NavBar and Profile Design)
                  </h3>
                  <h4>Roman Gontcharov</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/roman-gontcharov-7705856a/">
                      LinkedIn
                    </a>
                    <a href="https://github.com/remm9">GitHub</a>
                  </div>
                </div>
                <div className="team-members">
                  <h3>
                    Flex / Frontend / Backend (Splash, User Auth and Page
                    Design)
                  </h3>
                  <h4>Ricky Zheng</h4>
                  <div id="team-links">
                    <a href="https://www.linkedin.com/in/rickyzhengs/">
                      LinkedIn
                    </a>
                    <a href="https://github.com/lordrickyz">GitHub</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Team;