import { useState } from "react";
import { getNewCard, getNewDeck } from "./GameApi"
import { GamePage } from "./GamePage"
import { questions,objectsInterface, cardInterface, numericalValues } from "./GameData";

export const GameContainer = ()=>{


    // the answers object that has ids as keys and answers(initially empty) as values

    const getInitialState = questions.reduce((base,question)=>{
        base[question.id]={};
        return base;

    },{} as Record<string,{[key:string]:string}>)

    // step allows to move between different stages of the game

    const [step,setStep] = useState<number>(0);

    // questionsState saves the state of questions, i.e: user answers

    const [questionsState, setQuestionsState] = useState(getInitialState);

    // drawnCards saves the cards previously drawn from the api

    const [drawnCards,setDrawnCards] = useState<cardInterface[]>([]);

    // success measures if a user succeded or not, -1 means a response wasn't provided yet, 0 means that 
    // the answer is incorrect, 1 means that it's correct.

    const [success,setSuccess] = useState<number>(-1);


    //console.log('drawn cards',drawnCards);


    // updateDrawnCards pushes a new drawn card to the previous array.

    const updateDrawnCards = (array:cardInterface)=>{
        setDrawnCards((prevArray)=>[...prevArray,array]);
    }

    // updateState updates the state of the question by saving the user answer

    const updateState = (questionId:string, questionsState:Record<string,{[key:string]:string}>)=>{
        const updatedState = {...questionsState};
        setQuestionsState({...updatedState});

        //console.log('answer',updatedState[questionId])

        console.log('questionId',questionId);

        const answer:string = updatedState[questionId].answer;


        
    }



    // next sends the execution flow to the correct verification function

    const next = (questionId:any,value:string)=>{

        if(questionId[0] === '1'){
            console.log('user answer',value);
            checkColor(value);
        }
        else if (questionId[0] === '2'){
            checkComparaison(value);
        }
        else if (questionId[0] === '3'){
            checkForm(value);
        }
    }

    //checkForm checks for the suit matching in the last question

    const checkForm = async(value:string)=>{
        const card = await drawCard();

        const cardSuit = card.suit;


        let res:boolean; 

        res = (value.toUpperCase() === cardSuit);

        if (res === true){
            console.log('congrats! You won the game.')
            setStep(4);
        }else{
            console.log('sorry.. your guess was incorrect. Please restart.')
            setSuccess(0);
        }
    }

    // checkComparaison checks the comparaison between the user guess and the actual value

    const checkComparaison = async(value:string)=>{
        const card = await drawCard();
        const oldValue = drawnCards[drawnCards.length-1].value;

        let res:boolean;

        if (value === 'Lower'){
            res = numericalValues[card.value] < numericalValues[oldValue];
            //console.log('res in the lower',res);
        }else if(value === 'Higher'){
            res = numericalValues[card.value] > numericalValues[oldValue];
            //console.log('res in the higher',res);
        }else{
            res = (numericalValues[card.value] === numericalValues[oldValue]);
            //console.log('res in the equal',res);
        }

        if (res === false){
            console.log('bad guess! please restart.');
            setSuccess(0);
        }else{
            console.log('nice guess! please continue.');
            setSuccess(1);
        }
    }

    // checkColor checks whether the user guessed it right in the first question

    const checkColor = async (value:string)=>{
        const card = await drawCard();

        //console.log('the drawn card',card);
        

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

        // The res gives the result of the user's guess, here there's a redirection to the appropriate step

        if (res === true){
            console.log('Nice guess,continue the game!')
            setSuccess(1);

        }else{
            console.log('Bad guess,please restart!')
            setSuccess(0);
        }
    }


    // call to the api to draw a new card from the deck

    const drawCard = async()=>{
        try{

            // drawing a new card from the api
            const newCard = await getNewCard();


            if (newCard.success === true){

                updateDrawnCards(newCard.cards[0]);

                return newCard.cards[0];
            }

        }catch{
            console.log('an error occured');
        }
    }

    console.log('updateState',questionsState,'count',step)



    


    const startGame = async()=>{
        try{
            const res = await getNewDeck();
    
            if(res.success=== true){
                setDrawnCards([]);
                setStep(1);
                return res;
            }
        }catch{
            console.log('an error occured')
        }
       
    }


    const cancelGame = ()=>{
        setSuccess(-1);
        setStep(0);
    }


    const nextGame =(value:number)=>{

        if (value === step+1){
            console.log('changing now')
            setSuccess(-1);
            setStep(value);
            
        }else{console.log('error, cant proceed')}

    }





    // Here declaring an object of functions and objects, and putting all the functions there, then passing them as a prop to the GamePage

    const functions:any={};
    const objects:objectsInterface={count:0,questions:[],getInitialState:getInitialState,success:-1,drawnCards:[]};

    functions.start = ()=>{
        startGame();
    } 

    functions.updateState = updateState;
    functions.cancel = ()=>{
        cancelGame();
    }

    functions.next = (id:string,value:string)=>{
        next(id,value);
    }

    functions.nextGame = (value:number)=>{
        nextGame(value);
    }

    objects.count = step;
    objects.questions = [...questions];
    objects.getInitialState = {...getInitialState};
    objects.success=success;
    objects.drawnCards=drawnCards;


    return <GamePage functions={functions} objects={objects}/>
}