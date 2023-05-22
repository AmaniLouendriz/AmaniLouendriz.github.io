import { QuestionItem } from "./components/QuestionsItem";
import { objectsInterface } from "./GameData";
import { LandingPage } from "./components/LandingPage/LandingPage";

import { SuccessMessage } from "./components/SuccessMessage";

export const GamePage=(
    {functions,objects}:{
        functions:any,
        objects:objectsInterface
    }
)=>{

    const start = ()=>{
        return functions.start();

    }

    const cancel = ()=>{
        return functions.cancel();
    }

    const count = objects.count;

    const success = objects.success;



    const nextGame = (value:number) => {return functions.nextGame(value)};




    //const [opened, setOpened] = useState(false);

    // const questions = objects.questions;

    // console.log("functions,",functions);
    // console.log('objects',objects);
    // console.log('step',count);

    // console.log("{count}",{count});


    //console.log('success',success);


 
    return(
        <>


        {count === 0?
            <LandingPage start={start}/> :
                <QuestionItem objects={objects} functions={functions} />   
        }

        {success != -1?
                <SuccessMessage successValue={success} nextGame={nextGame} step={count} cancel={cancel}/>:<></>        
        }
        </>
    )
}