import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
    <div className="card">
      <img className="img" src={hero.image} alt="" />
      <h2>
        {hero.name} {hero.adress}
      </h2>
        <p>πΊοΈ{hero.city} </p>
        <p>ποΈ{hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>
          melgeller.foto@gmail.com
          </a>
        </p>
        <p>π± {hero.phone}</p>
        <p>πΎ<a href={hero.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Hero;