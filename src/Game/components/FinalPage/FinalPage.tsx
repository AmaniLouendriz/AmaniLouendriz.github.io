import { Button, Title } from "@mantine/core"
import { cardInterface } from "../../GameData"
import { CardComponent } from "../CardComponent/CardComponent"
import { useStyles } from "./FinalPage.styles";

export const FinalPage = ({cards,cancel}:{cards:cardInterface[],cancel:()=>{}})=>{

    const {classes} = useStyles();
    return(
        <>

            <Title fz={'lg'} className={classes.title}>Congrats! You won the game. </Title>


            <Title fz={'md'} className={classes.titleSec}>Those are your cards! </Title>




            <div className={classes.row}>

            {cards.map((card)=> 

                <div className={classes.column}>
                    <CardComponent card={card} key={card.value}/>
                </div>)
                
            }

            </div>

            <Button className={classes.btn} onClick={()=>{cancel()}}>Back to the landing page</Button>
        
        
        
        
        </>
    
        
        
        
    )
}