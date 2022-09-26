import React from "react";
import photo from '../assets/profile-img.png';

export default function Info(){
    return (
        <div className="info-section">
            <img src={photo} />
            <h1 className="info--h1">Dorcas Komane</h1>
            <h4 className="info--h4">Frontend Developer</h4>
            <button className="info--button"><a href="#"><i class="fa-solid fa-envelope" id="info--envelope"></i>Email</a></button>
        </div>
    )
}