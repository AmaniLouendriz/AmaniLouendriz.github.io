import { Button } from "@mantine/core";
import { QuestionItem } from "./components/QuestionsItem";
import { objectsInterface } from "./GameData";
import { LandingPage } from "./components/LandingPage/LandingPage";

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
    // const questions = objects.questions;

    // console.log("functions,",functions);
    // console.log('objects',objects);
    // console.log('step',count);

    // console.log("{count}",{count});

 
    return(
        <>
        {count == 0 ? 
            <LandingPage start={start}/>       
            :
            
            
            <QuestionItem objects={objects} updateState={functions.updateState} />
            
           // <QuestionItem step={step}/>>
        }
           
            
        </>
    )
}