import { Button, Modal } from "@mantine/core"
import { useState } from "react";
import { cardInterface } from "../../GameData";
import { CardComponent } from "../CardComponent/CardComponent";
import { useStyles } from "./SuccessMessage.styles";

export const SuccessMessage = (
    
    
    {successValue,nextGame,step,cancel,cards}
    
    :
        
    {successValue:number,nextGame:(value:number)=>any,step:number,cancel:()=>{},cards:cardInterface[]})=>{


    const handleSuccess = ()=>{
        console.log('step',step);
        setOpened(false);
        nextGame(step+1);
    }

    const handleFailure = ()=>{
        setOpened(false);
        cancel();

        



    }

    const {classes} = useStyles();



    const [opened,setOpened] = useState(true);

    const value = cards[step-1]?.suit;

    const card = cards[step-1];


    console.log('step',step,'value',value)



    if (successValue === 1){

        console.log('step in the success',step,'opened',opened);

        if (opened === false){setOpened(true)}


        return(
        
            <Modal centered withCloseButton={false} size={'md'} radius={'lg'}
            
            opened={opened} onClose={()=>setOpened(false)} title="Correct Guess!">
                {<>


                    <CardComponent card={card}/>
                
                    <Button className={classes.Btn} onClick={handleSuccess}>Next</Button></>
                    
                }
            </Modal>
            
        )
    }else{
        if (opened === false){setOpened(true)}



        return(
            <Modal opened={opened} onClose={()=>false} title="Incorrect Guess..">
                {
                    <>
                        <CardComponent card={card}/>
                        <Button className={classes.Btn} onClick={handleFailure}>Restart Game</Button>                    
                    </>}
            </Modal>


        )
    }

}