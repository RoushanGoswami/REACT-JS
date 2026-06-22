import React, { useState, useEffect } from "react";

export default function PhotoScreen() {
  const [photos, setPhotos] = useState([]);
  const fetchPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setPhotos(data);
  };

useEffect(()=>{
fetchPhotos()
},[])
  return (
    <>
      <p>
        {photos.map((photo) => (
          <div><p>{photo.title}</p></div>
        ))}
      </p>
    </>
  );
}
