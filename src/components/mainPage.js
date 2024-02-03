import React from "react";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

import BookSlot from "./bookAppoint";

function MainPage(){
    return(
        <div>     
        <div>
        <nav class="navbar bg-info-subtle" >
            <div class="container-fluid">
            <MdOutlineMedicalServices />
            
               <div>
               
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a>ContactUs</a>
                    </li>
                    <li class="nav-item">
                        <div><a href="http://localhost:3000/login"><IoPersonCircle /></a></div>
                    </li></ul>
               </div>
            </div>
        
        </nav></div>
        <div> <BookSlot/></div>
        
        
                
        
    </div>
    );
    
}

export default MainPage;