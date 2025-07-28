import { useState } from "react";
export default function Ludoboard(){
    let[moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});

    let updateBlue=()=>{
      console.log('moves.blue=${moves.blue}');
      setMoves((prevMoves)=>{
        return {...prevMoves , blue: prevMoves.blue+1 }
    });
    };
    let updaterRed=()=>{
      console.log('moves.red=${moves.red}');
      setMoves((prevMoves)=>{
        return {...prevMoves , red: prevMoves.red+1 }
    });
    };
    let updateGreen=()=>{
      console.log('moves.blue=${moves.green}');
      setMoves((prevMoves)=>{
        return {...prevMoves , green: prevMoves.green+1 }
    });
    };
    let updateYellow=()=>{
      console.log('moves.blue=${moves.yellow}');
      setMoves((prevMoves)=>{
        return {...prevMoves , yellow: prevMoves.yellow+1 }
    });
    };
    return(
    <div>
        <p>Game Begins!</p>
        <div className="Board">
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}}onClick={updaterRed}>+1</button>
            <p>Green moves={moves.green}</p>
            <button style={{backgroundColor:"green"}}onClick={updateGreen}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}}onClick={updateYellow}>+1</button>
        </div>
    </div>
    );
}