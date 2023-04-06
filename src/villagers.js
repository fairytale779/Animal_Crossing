import React from "react";
import "./App.css";

function Villagers({ name, gender, image_url, species }) {
  return (
    <div className="villagers">
      <h2>{name}</h2>
      <img src={image_url} alt="이미지" height={"200px"} />
      <h4>성별 : {gender}</h4>
      <h4>종류 : {species}</h4>
      <br></br> <br></br>
    </div>
  );
}

export default Villagers;
