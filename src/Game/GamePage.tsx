import { Button } from "@mantine/core";

export const GamePage=(
    {functions}:any
)=>{

    const start = ()=>{
        return functions.start();

    }

    console.log("functions,",functions);

    const handleStart= () =>{
        console.log("button clicked");
        
        start();
    };
    return(
        <>
            <h1>Start the game by clicking on the button here</h1>
            <Button onClick={handleStart}>Start Here</Button>
        </>
    )
}