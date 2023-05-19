import { useState } from "react";
import { getNewDeck } from "./GameApi"
import { GamePage } from "./GamePage"
import { questions,objectsInterface } from "./GameData";

export const GameContainer = ()=>{

    const [step,setStep] = useState<number>(0);




    const startGame = async()=>{
        try{
            console.log(" In the start game");
            const res = await getNewDeck();
            console.log('res in the container',res);
    
            if(res.success=== true){
                setStep(1);
                return res;
            }
        }catch{
            console.log('an error occured')
        }
       
    }





    // Here declaring an object of functions, and putting all the functions there, then passing them as a prop to the GamePage

    const functions:any={};
    const objects:objectsInterface={count:null,questions:null};

    functions.start = ()=>{
        startGame();
    } 

    objects.count = step;
    objects.questions = [...questions];


    return <GamePage functions={functions} objects={objects}/>
}