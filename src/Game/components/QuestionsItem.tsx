import { Button, Modal, NativeSelect, Title } from "@mantine/core";

import { answerOptionType, objectsInterface } from "../GameData";
import { useState } from "react";
import { useStyles } from "./QuestionItem.styles";
import { useDisclosure } from "@mantine/hooks";



export const QuestionItem = ({objects,functions}:{objects:objectsInterface,functions:any})=>{


    const {classes} = useStyles();

    const count = objects.count;
    const questions = objects.questions;
    const questionsState = objects.getInitialState;


    const updateState = functions.updateState;

    const cancel = functions.cancel;

    const next = functions.next;

    const [selectValue,setSelectValue] = useState("");

    const [state,setState] = useState(questionsState);



    


    // getting the options in the drop down menu for the first question
    const stageOptions:string[] = [];
    questions[count-1].answerOption.map((answerOption:answerOptionType)=>{
          stageOptions.push(answerOption.answerText);
    })

    // this function handles the change of all questions after being aswered
    const handleChange = (value:string)=>{
        setSelectValue(value);
        updateState([questions[count-1].id],{
            ...state,
            [questions[count-1].id]:{'answer':value}
        })

        setState({
            ...state,
            [questions[count-1].id]:{'answer':value}
        })
        

    }


    const handleCancel = ()=>{

        console.log('cancel button clicked');
        cancel();


    }

    const handleNext = ()=>{

        console.log('next button clicked');

        next(questions[count-1].id,selectValue);


    }


    const getQuestion = (count:number|null)=>{
        switch(count){
            case 1:
                return(
                <div className={classes.section}>

                    <Title fz={'lg'} className={classes.question}>{questions[count-1].questionText}</Title>
                
                    <NativeSelect  className={classes.select} radius={"lg"}
                    
                    data={stageOptions} value={selectValue} 
                    onChange={(event)=>handleChange(event.currentTarget.value)}
                    
                    //error="Please choose at least one item"
                    />

                    <div className={classes.btns}>
                        <Button className={classes.cancelBtn} onClick={handleCancel}>Cancel</Button>
                        <Button className={classes.nextBtn} onClick={handleNext}>Check</Button>
                    </div>


                
                </div>)
            case 2:
                return(<> 
                
                    <h3>{questions[count-1].questionText}</h3>
                
                    <NativeSelect data={stageOptions} value={selectValue} 
                    onChange={(event)=>handleChange(event.currentTarget.value)}/></>)
            case 3:
                return(<>

                    <h3>{questions[count-1].questionText}</h3>
                
                    <NativeSelect data={stageOptions} value={selectValue} 
                    onChange={(event)=>handleChange(event.currentTarget.value)}/>                
                    </>)
            default:
                return<></>
        }

    }


    return(
            <>{getQuestion(count)}</>
            

    )
        
}