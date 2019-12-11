import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function MarsPhotos() {
  const [photo, setPhoto] = useState([]);
  
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=4DJGrXo02WCAP4Ta8TkCj1sSjaY65V7xx8HVVZja`)
    .then(response => {
      console.log(response);
      setPhoto(response.data);
    })
    .catch(err => {
      alert(err);
    });
  }, [])

  return (
    <div className = "container">
        {photo.map((pic, index) => {
            return <NasaCard key = {index} imgUrl = {pic} date = "11/11/11" planet = "Mars" />
        })}
    </div>
          
  )
}