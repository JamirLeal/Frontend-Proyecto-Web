import react from "react";
import profileimage from '../imgs/profileimage.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import { useNavigate } from "react-router-dom";


const Perfil = () => {

    let navigate = useNavigate();

    return (


 <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
            <div class="card p-3 py-4 ">
                <div class="text-center"> 
                <img src={profileimage} width="200" class="rounded-circle" /> 
                 </div>
                <div class="text-center mt-3"> 
                   <button  className="btn btn-secondary">Edit your data</button>
                   <button className="btn btn-info">Your Profile</button>
                   <button className="btn btn-success" onClick={() => {
                       navigate("/calendario");
                   }
                   }
                   >
                       {""}
                       Return calendar
                   </button>

                    <h5 class="mt-2 mb-0">Kevin Cori</h5> 
                    
                <div class="profilecontainer p-3 my-3 bg-dark text-white">
                    <div class="px-4 mt-1">
                        <h5> Username:</h5>
                        <h5> Email:</h5>
                        <h5> Date Birth:</h5>
                        <h5 id="text-right"> Height:</h5>
                        <h5 id="text-right"> Weight:</h5>
                    </div>
                    </div>
                 
                    
                </div>
            </div>
        </div>
    </div>
</div>


    )

}

export default Perfil