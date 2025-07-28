import { useState } from "react";
export default function Likebutton(){
    let [isliked,setisliked]=useState(false);
    let clicked=()=>{
        setisliked(!isliked);
    }
    return(
        <div>
            
        </div>
    );
}