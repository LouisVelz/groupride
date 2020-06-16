import React from "react";
import '../../stylesheets/footer/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
                <div id="splash-footer-container">
                    <div id="splash-footer-links">
                        <a href="">About Us</a>
                        <a href="">Developers</a>
                        <a href="">Technology</a>
                        <a href="">Hot Sauce</a>
                    </div>
                    <h2>GroupRide</h2>
                    <p>© Copyright 2020. All rights reserved.</p>
                </div>
            </section>
        );
    }
}

export default Footer;