import { useState } from "react";
import { getNewDeck } from "./GameApi"
import { GamePage } from "./GamePage"

export const GameContainer = ()=>{

    const [step,setStep] = useState(0);


    const startGame = async()=>{
        console.log(" In the start game");
        const res = await getNewDeck();
        console.log('res in the container',res);
        setStep(1);
        return res;
    }

    const deck = startGame();

    console.log('deck in the container',deck);




    // Here declaring an object of functions, and putting all the functions there, than passing them as a prop to the GamePage

    const functions:any={};
    const object:any={};

    functions.start = ()=>{
        startGame();
    } 
    return <GamePage functions={functions}/>
}