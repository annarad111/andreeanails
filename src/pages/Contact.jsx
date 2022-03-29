import React from "react";
import "./Contact.css";
import Map from '../components/Map';


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
    </>
    )
}