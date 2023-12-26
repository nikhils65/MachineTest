import React from "react";
import { Container } from "react-bootstrap";
function Footer(){
    return(
        <>
        <Container className="text-white"style={{fontWeight:"20"}}>

            <p style={{fontSize:"2rem"}} >Interested in delving deeper into the project?</p>
            <p>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
            <div className="buttons mb-3" style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
  <button className="btn1" style={{ border: "1px solid white", color: "white", background: "black", padding: "0.6rem 5rem" }}>
    Ring us on Skype
  </button>
  <button className="btn2" style={{ background: "white", color: "black", border: "none", padding: "0.6rem 5rem" }}>
    Contact Us
  </button>
</div>

<div className="footer pb-2">  <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p></div>
               
            </Container>

            </>
    )
}
export default Footer