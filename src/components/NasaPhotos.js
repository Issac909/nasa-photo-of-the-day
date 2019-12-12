import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function MarsPhotos() {
  const [photo, setPhoto] = useState([]);
  console.log(photo);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=4DJGrXo02WCAP4Ta8TkCj1sSjaY65V7xx8HVVZja`)
    .then(response => {
      console.log(response.data);
      setPhoto(response.data);
    })
    .catch(err => {
      alert(err);
    });
  }, [])

  return (
    <div className = "container">
        {     
            <NasaCard key = {photo.url} imgUrl = {photo.hdurl} date = {photo.date}  title = {photo.title} explanation ={photo.explanation} />
        }
    </div>
          
  );
};