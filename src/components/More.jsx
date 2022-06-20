import React from 'react'
import "./More.scss"

const More = ({languages, habilities, expos}) => {
  return (
    <div className='more-card'>
    <div className="languages-card">
    <h2>Languages</h2>
    {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='language'>💬 {item.language}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
    </div>



    <div className='habilities-card'>
    <h2>Habilities</h2>
    {habilities.map((item) =>{
        return(
            <div key={JSON.stringify(item)}>
              <p className='habilities'>{item}</p>
            </div> 
        )
    })}
    </div>


<div className='expos-card'>
    <h2>Expos</h2>
    {expos.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='expo'>📆 {item.name}</p>
              <p>{item.when}</p>
              <p>{item.where}</p>
            </div>
          );
        })}
    </div>
</div>
  )
}

export default More