import React from "react";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";


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
                        <div><a href="http://localhost:3000/log"><IoPersonCircle /></a></div>
                    </li></ul>
               </div>
            </div>
        
        </nav></div>
        
        
                
        
    </div>
    );
    
}

export default MainPage;