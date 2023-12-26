import React from "react";
import { Container } from "react-bootstrap";
function Contribution(){
    return(
        <>
        <Container>
        <div classname="datacontent"  style={{color:"white",fontWeight:"20"}}>
        <p style={{fontSize:"2rem"}}>Our Contribution</p>

        <p >Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community.
             Collaborating with us represents an investment, rather than a mere expenditure.
             Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
             </div>
             <div className="mt-3">
  <div className="row">
    <div className="col-sm-12 col-md-4 mb-4">
      <div className="card1 text-white" style={{ width: "100%", fontWeight: "20" }}>
        <p style={{fontSize:"5rem"}}>5M</p>
        <p>Daily User 
Engagements 
</p>
      </div>
    </div>
    <div className="col-sm-12 col-md-4 mb-4">
      <div className="card1 text-white" style={{ width: "100%", fontWeight: "20" }}>
        <p style={{fontSize:"5rem"}}>$500K</p>
        <p>Revenue Surge for a Platform</p>
      </div>
    </div>
    <div className="col-sm-12 col-md-4 mb-4">
      <div className="card1 text-white" style={{ width: "100%", fontWeight: "20" }}>
        <p style={{fontSize:"5rem"}}>10X</p>
        <p>ROAS on all our marketing campaigns</p>
      </div>
    </div>
  </div>
</div>

        </Container>
        
        </>
    )
}
export default Contribution