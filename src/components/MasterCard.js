import React from "react";
import "./MasterCard.css";
import simcard from "../media/simcard.PNG";


const MasterCard = (props) => {
//const date = props.date.getMonth();
//console.log(date)

  //console.log(typeof props.cardNumber);
  let x = props.cardNumber;
  let newNumber = "";
  if (x === undefined ) {
     newNumber = " "
  } else {
    let neww = x.split("");
    for (let y = 0; y < 4; y++) {
      const z = neww.splice(neww.length - 4, neww.length);
      const q = z.join("") + " ";
      newNumber = q + newNumber;
    }
   //console.log(h)
    //console.log(i)
  }



  return (
    <div className="card">
      <div className="top">CARD NUMBER</div>
      <div className="lowertop">{newNumber}</div>
      <div className="middle">
        <img src={simcard} alt="simcard" />
      </div>
      <div className="bottom">EXPIRATION DATE</div>
      <div className="inner-wrapper">
        <div className="st-item">
          <p className="date">{props.date}</p>
          <p className="name">John Doe</p>
        </div>
        <div className="last">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
