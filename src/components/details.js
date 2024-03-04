import React from "react";
import { Link } from "react-router-dom";
import MainPage from "./mainPage";

function DoctorDetails(){

    return(

        <div>
           <MainPage/>
        <div>
<div class="card border-info " style={{maxWidth: "18rem"}}>
{/* <img class="card-img-top" src="..." alt="Card image cap"/> */}

<div class="card-body">
  <h5 class="card-title">Doctor 1</h5>
  <p class="card-text"> description about Doctor 1</p>
</div>
<button> <Link to="/site"> Book your appointment</Link></button>
</div>
<div class="card border-info" style={{maxWidth: "18rem"}}>
{/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
<div class="card-body">
  <h5 class="card-title">Doctor 2</h5>
  <p class="card-text">description about Doctor 2</p>
</div>
<button> <Link to="/site"> Book your Appointment</Link></button>
</div>
<div class="card border-info" style={{maxWidth: "18rem"}}>
{/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
<div class="card-body">
  <h5 class="card-title">Doctor 3</h5>
  <p class="card-text">description about Doctor 3</p>
</div>
<button> <Link to="/site"> Book your Appointment</Link></button>
</div>
</div>
            
        </div>
    )
}

export default DoctorDetails;