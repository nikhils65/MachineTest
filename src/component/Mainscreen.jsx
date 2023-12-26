import React from "react";
import Homepage from "./home";
import Cardmain from "./Cardsmain";
import Contribution from "./Contribution";
import Footer from "./Footer";

function Mainscreen(){
    return(
        <>
        <div className="bg-black"> 
        <Homepage/>
        <Cardmain/>
        <Contribution/>
        <Footer/>


        </div>
        
        </>
    )
}
export default Mainscreen