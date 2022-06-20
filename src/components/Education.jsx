import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div className="education-card">
      <div className='education'>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='name'>📖 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
