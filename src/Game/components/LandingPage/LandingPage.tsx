import { Button,Text, Title } from "@mantine/core"
import { useStyles } from "./LandingPage.styles";
import { CardComponent } from "./CardComponent";
import { cardImage } from "../../../assets";
import { useMediaQuery } from "@mantine/hooks";

export const LandingPage = ({start}:{start:()=>any})=>{


    const handleStart= () =>{
        console.log("button clicked");
        
        start();
    };




    const {classes} = useStyles();




    return(
        <div className={classes.row}>

          

            <div className={classes.column}>

                <Title order={2} className={classes.title}>Welcome to <Text span c='blue' inherit>Guess What? !</Text></Title>

                <Text className={classes.intro}>
                <Text span c='white' inherit><b>Guess What? !</b></Text> is an online card game between you and the computer. 
                    
                    It has three stages, and in each one of them, you will be asked a question about the next card being drawn by the computer.
                    
                    If you guessed it correctly, you can move to the next stage. Otherwise, you'll have to restart. 
                    
                    
                    Please note that in this game, a standard deck of 52 cards is being used (Black and Red). The values are: Ace, numerical cards, King, Queen and Jack. The suits are the: diamonds, hearts, spades and clubs! 
                    
                    
                    The game is also waiting for exciting updates in the future. So, stay tuned!
                </Text>

                <Button className={classes.startBtn} onClick={handleStart}>Start</Button>



            </div>

            <div className={classes.column}>
                <CardComponent image={cardImage}/>
            </div>


        
        
        </div>
    
    
    
    
    )
}