import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homePizza.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Hizza Put </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
        <Link to ="/reservation">
            <button> Reservation </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;