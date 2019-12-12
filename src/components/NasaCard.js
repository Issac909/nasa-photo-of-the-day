import React from "react";

const NasaCard = props => {
    return (
        <div className = "photos">
            <h2>{props.title} </h2>
            <div class = "marsImage" key = {props.id}>              
                <img className = "image" src = {props.imgUrl} alt = "Nasa"></img>
            </div>
            <div className = "imgInfo">
                <p className = "date">Date: {props.date}</p>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default NasaCard;