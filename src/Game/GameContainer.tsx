import { useEffect, useState } from "react";
import { getNewCard, getNewDeck } from "./GameApi"
import { GamePage } from "./GamePage"
import { questions,objectsInterface, QuestionInterface, cardInterface } from "./GameData";

export const GameContainer = ()=>{


    // the answers object that has ids as keys and answers(initially empty) as values

    const getInitialState = questions.reduce((base,question)=>{
        base[question.id]={};
        return base;

    },{} as Record<string,{[key:string]:string}>)


    //console.log("initial state",getInitialState);


    
    const [step,setStep] = useState<number>(0);
    const [questionsState, setQuestionsState] = useState(getInitialState);
    const [drawnCards,setDrawnCards] = useState<cardInterface[]>([]);


    // filling this empty array with the drawn cards coming from the api
    let drawnCardsCopy:cardInterface[] = [];

    useEffect(()=>{

        setDrawnCards(drawnCardsCopy);

    },[questionsState]);

    const updateState = (questionId:string, questionsState:Record<string,{[key:string]:string}>)=>{
        const updatedState = {...questionsState};
        setQuestionsState({...updatedState});

        //console.log('answer',updatedState[questionId])

        console.log('questionId',questionId);

        const answer:string = updatedState[questionId].answer;

        next(questionId,answer);

        
    }

    // Building a next functions would be better

    const next = (questionId:any,value:string)=>{

        //TODO: check why questionId is an array

        if(questionId[0] === '1'){
            console.log('user answer',value);
            checkColor(value);
        }
        // else if (questionId === '2'){
        //     checkComparaison();
        // }else if (questionId === '3'){
        //     checkForm();
        // }


    }

    const checkColor = async (value:string)=>{
        const card = await drawCard();
        console.log('the drawn card',card);
        console.log('actual drawn cards',drawnCards);

        // determining the suit of the drawn color
        const suit = card.suit;

        let suitColor:string;

        // according to the suit, the color can be determined

        if(suit === 'SPADES' || suit === 'CLUBS'){
            suitColor = 'Black';
        }else{
            suitColor = 'Red';
        }

        const res = suitColor === value

        // The res give the result of the user's guess, here there's a redirection to the appropriate step

        if (res === true){
            console.log('Nice guess,continue the game!')
            setStep(2);
        }else{
            console.log('Bad guess,please restart!')
            setStep(0);
        }
    }

    const drawCard = async()=>{
        try{

            // drawing a new card from the api
            const newCard = await getNewCard();

            // console.log('newCard from inside the container',newCard);

            if (newCard.success === true){

                drawnCards.push(newCard.cards[0]);
                
                return newCard.cards[0];
            }

        }catch{
            console.log('an error occured');
        }
    }

    console.log('updateState',questionsState,'count',step)



    


    const startGame = async()=>{
        try{
            console.log(" In the start game");
            const res = await getNewDeck();
            console.log('res in the container',res);
    
            if(res.success=== true){
                setStep(1);
                return res;
            }
        }catch{
            console.log('an error occured')
        }
       
    }





    // Here declaring an object of functions, and putting all the functions there, then passing them as a prop to the GamePage

    const functions:any={};
    const objects:objectsInterface={count:0,questions:[],getInitialState:getInitialState};

    functions.start = ()=>{
        startGame();
    } 

    functions.updateState = updateState;

    objects.count = step;
    objects.questions = [...questions];
    objects.getInitialState = {...getInitialState};


    return <GamePage functions={functions} objects={objects}/>
}