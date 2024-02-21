import React from "react";
import { Link } from 'react-router-dom';
import MainPage from "./mainPage";

function CompanyDisplay(){
    return(
        <div>
           <MainPage/>
            <div>
  <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    
    <div class="card-body">
      <h5 class="card-title">Company 1</h5>
      <p class="card-text"> description about Company 1</p>
    </div>
   <button> <Link to="/1"> NEXT</Link></button>
  </div>
  <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body">
      <h5 class="card-title">Company 2</h5>
      <p class="card-text">description about Company 2</p>
    </div>
    <button> <Link to="/2"> NEXT</Link></button>
  </div>
  <div class="card border-info mb-3" style={{maxWidth: "18rem"}}>
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body">
      <h5 class="card-title">Company 3</h5>
      <p class="card-text">description about Company 3</p>
    </div>
    <button> <Link to="/3"> NEXT</Link></button>
  </div>
</div>

        </div>
    )
}

export default CompanyDisplay;