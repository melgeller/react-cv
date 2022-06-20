import React from "react";
import "./App.scss";
import { useState } from "react";
import { Hero, Education, Experience, About, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, expos } = CV;

function App() {
  const [cambiador, setCambiador] = useState("Hero");

  return (
    <div className='AppCV'>
      <div>
        <div className='botones'>
        <button onClick={() => setCambiador("Hero")}>
            <h1>🙋🏻‍♀️</h1>
          </button>
          <button onClick={() => setCambiador("About")}>
            <h1>👩‍💼</h1>
          </button>
          <button onClick={() => setCambiador("Education")}>
            <h1>👩‍🎓</h1>
          </button>
          <button onClick={() => setCambiador("Experience")}>
            <h1>👩‍🏭</h1>
          </button>
          <button onClick={() => setCambiador("More")}>
            <h1>👨‍🚀</h1>
          </button>
        </div>

        {cambiador === "Hero" ? (
          <Hero hero={hero} />
        ) : cambiador === "About" ? (
          <About hero={hero} />
        ) : cambiador === "Education" ? (
          <Education education={education} />
        ) : cambiador === "Experience" ? (
          <Experience experience={experience} />
        ) : (
          <More languages={languages} habilities={habilities} expos={expos} />
        )}
      </div>
    </div>
  );
}

export default App;
