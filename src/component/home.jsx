import React from "react";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <div className="container">
        <div class="text-white">
          <h1
            className="heading1"
            style={{ fontWeight: "20", fontSize: "2rem" }}
          >
            Epic Games: An American Video Game And Software Developer And
            Publisher Based In Cary, North Carolina.
          </h1>
        </div>

        <Image
          src="fortnite-pictures-b5kfcchwazwiz3cs 1.png"
          alt="Epic Games Image"
          fluid
          className="mt-3 mx-auto" 
        />
        <p className="text-white mt-3" style={{ fontWeight: "20"}}>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build,
         experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more.
          Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. 
          Find it all in Fortnite ... Drop In.</p>
          <button className="mb-2" style={{ padding: "0.6rem 5rem",background:"white",border:"none",}}>Visit Website</button>


      </div>
      
    </>
  );
}

export default Homepage;
