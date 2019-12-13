import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";



export default function NasaPhotos() {
  const [photo, setPhoto] = useState([]);
  console.log(photo);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=4DJGrXo02WCAP4Ta8TkCj1sSjaY65V7xx8HVVZja`)
    .then(response => {
      console.log(response);
      setPhoto(response.data);
    })
    .catch(err => {
      
      console.error(err);
    });
  }, [])

  return (
    <NasaCard key = {photo.url} imgUrl = {photo.hdurl} alt = {photo.copyright} date = {photo.date}  title = {photo.title} explanation ={photo.explanation} />    
  );
};