import React from "react";
import '../../stylesheets/footer/footer.css'

class Team extends React.Component {
    render() {
        return (
            <section className="team">
                <ul> 
                    <h2 className="team-title">Meet our team</h2>
                   
                    <li>
                        Team Leader and Product Management - Louis Velazquez
                        <br/>
                        <a  href="https://www.linkedin.com/in/louis-velazquez-bb63085a/">LinkedIn</a>
                        <a  href="https://github.com/LouisVelz">GitHub</a>
                    </li>
                    <li>
                        Backend Lead (User Auth and Map API) - Elvin Valette
                        <br/>
                        <a  href="www.linkedin.com/in/elvin-valette-5b2945a5">LinkedIn</a>
                        <a  href="https://github.com/elvinv123">GitHub</a>
                    </li>
                    <li>
                        Frontend lead (Splash and Profile Design) - Roman Gontcharov
                        <br/>
                        <a  href="https://www.linkedin.com/in/roman-gontcharov-7705856a/">LinkedIn</a>
                        <a  href="https://github.com/remm9">GitHub</a>
                    </li>
                    <li>
                        Flex / Frontend / Backend (API and Profile Design) - Ricky Zheng
                        <br/>
                        <a  href="https://www.linkedin.com/in/rickyzhengs/">LinkedIn</a>
                        <a  href="https://github.com/lordrickyz">GitHub</a>
                    </li>
                </ul>
                
            </section>
        );
    }
}

export default Team;