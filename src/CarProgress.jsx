import React from "react";

export const CarProgress = ({perc, nick, color, place}) => {
    return(
        <div className="Car-wrapper">
            <h3 style={{filter: `hue-rotate(${color}deg)`}}>{nick}<br /><br />{place}</h3>
            <div className="CarBox">
                <img className="Car" style={{left: `${perc}%`, filter: `hue-rotate(${color}deg)` }} src="https://cdn.pixabay.com/photo/2014/03/25/15/25/racing-car-296772_1280.png" />
                <img className="FinishLine" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCCUprIO5xJj4_9DLJXRGyAR7uIvxrNDsJQ&usqp=CAU" />
            </div>
        </div>
    )
}