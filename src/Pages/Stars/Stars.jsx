import React from 'react';
import { useState, useEffect } from 'react';
import CallAxios from '../../services/CallAxios';
import HomeCards from '../../Components/HomeCards';


function Stars() {
    const [constellation, setConstellations] = useState([]);

   async function callGet(){
       await CallAxios().getStars()
        .then(res => {
            setConstellations(res.data);
        })
    }
    useEffect(() => {callGet()},[]);


  return (
    <div>{constellation.map(item => (
      <div> 
        <p>{item.name}</p>
        <img src={item.image} />
      </div>
    ))}</div>
  )
}

export default Stars

// const requestURL = "../json/listasReproduccion.json";

// async function fetchPlaylistJson(){
//     const response = await fetch(requestURL);
//     const playlists = await response.json();
//     return playlists;
//}


Stars().then(Stars => {
    for (let index = 0; index < Stars.ProductsJson.length; index++)
    {
        const stars = document.getElementById('stars');

        let id = stars.products[index].id;
        let name = stars.products[index].name;
        let price = stars.products[index].price;
        let size = stars.products[index].size;
        let image = stars.products[index].image;
        let seller = stars.products[index].seller;

    //  Stars.innerHTML += `
    //         // <div class="card" style="width: 18rem;">
    //         //     <img class="card-img-top" src="${photo}" alt="Card image cap">
    //         //     <div class="card-body">
    //         //         <h5 class="card-title">${title}</h5>
    //         //         <p class="genre">${genre}</p>
    //         //         <p class="author">${author}</p>
    //         //     </div>
    //         // </div>
    //    `
    }
})