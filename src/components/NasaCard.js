import React from "react";

export default NasaCard = props => {
    return (
        <div className = "photos">
            <h2>THIS IS TEMPORARY</h2>
            <div class = "marsImage" key = {props.id}>              
                <img className = "image" src = {props.imgUrl} alt = ""></img>
            </div>
            <div className = "imgInfo">
                <p>Date:{props.date}</p>
                <p>Planet:{props.planet} </p>
                <p>Lorem ipsum</p>
            </div>
        </div>
    );
};