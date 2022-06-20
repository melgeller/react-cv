import React from "react";
import "./About.scss";

const About = ({ hero }) => {
    return (
        <div className="about-card">
          <div className="about">
            {hero.aboutMe.map((item) => {
              return (
                <div key={JSON.stringify(item)} className="item">
                  <p>{item.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

export default About;
