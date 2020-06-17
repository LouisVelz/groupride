import React from "react";
import '../../stylesheets/footer/footer.css'

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <h2>Background and Overview</h2>
                <p>GroupRide is an event creating web app made for Bikers.
                    Going on the road by yourself is always dangerous, no 
                    matter what type of bicycle you are riding. GroupRide 
                    allows Bikers to organize events that let friends, 
                    family, and others to join you to turn your solo ride 
                    into a group marathon!
                </p>
            </section>
        );
    }
}

export default About;