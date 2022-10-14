import React from "react"
import Grid from "../img/grid.png"

export default function Hero() {
  return (
    <section className="hero--body">
      <img className="hero--image" src={Grid} alt="Airbnb grid" />
      <h1 className="hero--h1">Online Experiences</h1>
      <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}