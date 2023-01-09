import React from "react";
import { useNavigate } from "react-router-dom";
const TopBar =() =>{
    const navigate = useNavigate();
    return(
        <div className="w-full h-10 bg-green-400 grid grid-cols-2 gap-4">
            <button onClick={()=>navigate("/create")}>
                Create
            </button>
            <button onClick={()=>navigate("/display")}>
                Display
            </button>
            

        </div>
    )
}
export default TopBar;