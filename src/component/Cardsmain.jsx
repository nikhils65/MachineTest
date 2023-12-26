import React from "react";

function Cardmain() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card1 text-white" style={{ width: "100%", fontWeight: "20"}}>
              <img src="Mask group.png" alt="" style={{ width: "100%" }} />
              <p className="mt-2">Explore large, destructible environments where no two games are ever the same.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card1 text-white" style={{ width: "100%", fontWeight: "20"}}>
              <img src="Mask group (1).png" alt="" style={{ width: "100%" }} />
              <p className="mt-2">Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-4 " >
            <div className="card1 text-white" style={{ width: "100%", fontWeight: "20"}}>
              <img src="Mask group (2).png" alt="" style={{ width: "100%" }} />
              <p className="mt-2">Discover even more ways to play across thousands of creator-made game genres</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardmain;
