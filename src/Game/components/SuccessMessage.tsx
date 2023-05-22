import { Button, Modal } from "@mantine/core"
import { useState } from "react";

export const SuccessMessage = (
    
    
    {successValue,nextGame,step,cancel}
    
    :
        
    {successValue:number,nextGame:(value:number)=>any,step:number,cancel:()=>{}})=>{


    const handleSuccess = ()=>{
        console.log('step',step);
        setOpened(false);
        nextGame(step+1);
    }

    const handleFailure = ()=>{
        setOpened(false);
        cancel();

        



    }


    const [opened,setOpened] = useState(true);



    if (successValue === 1){
        return(
        
            <Modal opened={opened} onClose={()=>false} title="Success !">
                {<><Button onClick={handleSuccess}>Next</Button></>}
            </Modal>
            
        )
    }else{
        return(
            <Modal opened={opened} onClose={()=>false} title="Sorry">
                {<><Button onClick={handleFailure}>Restart Game</Button></>}
            </Modal>


        )
    }

}