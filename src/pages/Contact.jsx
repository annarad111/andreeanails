import React from "react";
import "./Contact.css";
import Map from '../components/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Contact(){
    const location = {
        address: 'Strada Marasesti 61, Orasti, Frumusani',
        lat: 44.3205551,
        lng: 26.2902006,
      }


    return(
        <>
    <h1>Contact</h1>
    <Map location={location} zoomLevel={19} />
    <div className="contactdetails">
        <FavoriteIcon></FavoriteIcon><a href="tel:+40762727555" className="contactlinks" target="_blank">+4076 27 27 555</a>
        <FavoriteIcon></FavoriteIcon><a href="https://wa.me/+40762727555" className="contactlinks" target="_blank">Programari</a>
        <FavoriteIcon></FavoriteIcon><a href="https://www.facebook.com/AndreeaNailsNr1/?ref=page_internal" className="contactlinks" target="_blank">Facebook</a>
        </div>
    </>
    )
}