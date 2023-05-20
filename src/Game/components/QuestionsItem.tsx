import { NativeSelect } from "@mantine/core";

import { QuestionInterface, answerOptionType, objectsInterface } from "../GameData";
import { useState } from "react";



export const QuestionItem = ({objects,updateState}:{objects:objectsInterface,updateState:any})=>{

    const count = objects.count;
    const questions = objects.questions;
    const questionsState = objects.getInitialState;

    const [selectValue,setSelectValue] = useState("");

    const [state,setState] = useState(questionsState);


    // getting the options in the drop down menu for the first question
    const stage1Options:string[] = [];
    questions[0].answerOption.map((answerOption:answerOptionType)=>{
          stage1Options.push(answerOption.answerText);
    })

    // this function handles the change of all questions after being aswered
    const handleChange = (value:string)=>{
        setSelectValue(value);
        updateState([questions[count-1].id],{
            ...state,
            [questions[count-1].id]:{'answer':value}
        })
        

    }


    const getQuestion = (count:number|null)=>{
        switch(count){
            case 1:
                return(
                <>

                    <h3>{questions[count-1].questionText}</h3>
                
                    <NativeSelect data={stage1Options} value={selectValue} 
                    onChange={(event)=>handleChange(event.currentTarget.value)}/>
                
                </>)
            case 2:
                return(<></>)
            case 3:
                return(<></>)
            default:
                return<></>
        }

    }


    return(
        <>
        {getQuestion(count)}
        </>

    )
        
}