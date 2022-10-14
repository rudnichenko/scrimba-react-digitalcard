import React from "react";
import Star from "../img/star.svg"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card--body">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`src/img/${props.coverImg}`} alt="Katie" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="Star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}