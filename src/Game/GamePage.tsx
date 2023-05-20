import { Button } from "@mantine/core";
import { QuestionItem } from "./components/QuestionsItem";
import { objectsInterface } from "./GameData";
// import { QuestionItem } from "./components/QuestionsItem";

export const GamePage=(
    {functions,objects}:{
        functions:any,
        objects:objectsInterface
    }
)=>{

    const start = ()=>{
        return functions.start();

    }

    const count = objects.count;
    const questions = objects.questions;

    console.log("functions,",functions);
    console.log('objects',objects);
    console.log('step',count);

    console.log("{count}",{count});

    const handleStart= () =>{
        console.log("button clicked");
        
        start();
    };
    return(
        <>
        {count == 0 ? 
            <div><h1>Start the game by clicking on the button here</h1>
            <Button onClick={handleStart}>Start Here</Button></div>:
            
            
            <QuestionItem objects={objects} updateState={functions.updateState} />
            
           // <QuestionItem step={step}/>>
        }
           
            
        </>
    )
}