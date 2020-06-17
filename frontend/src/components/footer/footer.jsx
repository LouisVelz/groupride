import React from "react";
import '../../stylesheets/footer/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
                <div id="splash-footer-links">
                    <a href="#/about">About Us</a>
                    <a href="#/team">Developers</a>
                    <a href="#/technology">Technology</a>
                    <a href="https://github.com/LouisVelz/groupride">Github</a>
                </div>
                <a id="footer-logo" href="#/"><h2>GroupRide</h2></a>
                <p>© Copyright 2020. All rights reserved.</p>
            </section>
        );
    }
}

export default Footer;