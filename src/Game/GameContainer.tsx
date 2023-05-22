import { useEffect, useState } from "react";
import { getNewCard, getNewDeck } from "./GameApi"
import { GamePage } from "./GamePage"
import { questions,objectsInterface, QuestionInterface, cardInterface, numericalValues } from "./GameData";

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

    const [success,setSuccess] = useState<number>(-1);// success == 0 means that the player guessed 
    //incorrectly, success == 1 means the player guessed correctly, success == -1 means that the answer isnt processed yet...


    // filling this empty array with the drawn cards coming from the api
    //let drawnCardsCopy:cardInterface[] = [];

    console.log('drawn cards',drawnCards);

    // useEffect(()=>{

    //     console.log('drawn cards copy',drawnCardsCopy);

    //     setDrawnCards([...drawnCardsCopy]);

    // },[]);

    const updateDrawnCards = (array:cardInterface)=>{
        setDrawnCards((prevArray)=>[...prevArray,array]);
    }

    const updateState = (questionId:string, questionsState:Record<string,{[key:string]:string}>)=>{
        const updatedState = {...questionsState};
        setQuestionsState({...updatedState});

        //console.log('answer',updatedState[questionId])

        console.log('questionId',questionId);

        const answer:string = updatedState[questionId].answer;


        
    }



    // Building a next functions would be better

    const next = (questionId:any,value:string)=>{

        //TODO: check why questionId is an array

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

    const checkForm = async(value:string)=>{
        const card = await drawCard();

        const cardSuit = card.suit;

        console.log('old value in the check form',cardSuit);

        let res:boolean; 

        res = (value.toUpperCase() === cardSuit);

        if (res === true){
            console.log('congrats! You won the game.')
            setStep(4);
        }else{
            console.log('sorry.. you guess was incorrect. Please restart.')
            setSuccess(0);
        }
    }

    const checkComparaison = async(value:string)=>{
        //console.log('in the comparaison');
        const card = await drawCard();
        //console.log("the new drawn card in the check comparaison",card);
        const oldValue = drawnCards[drawnCards.length-1].value;
        //console.log('old number',oldNumber);

        let res:boolean;

        if (value === 'Lower'){
            res = numericalValues[card.value] < numericalValues[oldValue];
            console.log('res in the lower',res);
        }else if(value === 'Higher'){
            res = numericalValues[card.value] > numericalValues[oldValue];
            console.log('res in the higher',res);
        }else{
            res = (numericalValues[card.value] === numericalValues[oldValue]);
            console.log('res in the equal',res);
        }

        if (res === false){
            console.log('bad guess! please restart.');
            setSuccess(0);
        }else{
            console.log('nice guess! please continue');
            setSuccess(1);
        }
    }

    const checkColor = async (value:string)=>{
        const card = await drawCard();
        console.log('the drawn card',card);
        // console.log('actual drawn cards',drawnCards);

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
            //setStep(2);
            setSuccess(1);

        }else{
            console.log('Bad guess,please restart!')
            //setStep(0);
            setSuccess(0);
        }
    }

    const drawCard = async()=>{
        try{

            // drawing a new card from the api
            const newCard = await getNewCard();


            if (newCard.success === true){

                //console.log('newCard from inside the container',newCard);


                //drawnCardsCopy.push(newCard.cards[0]);

                updateDrawnCards(newCard.cards[0]);

                //console.log('drawn cards copy in the drawCard',drawnCardsCopy);
                
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

        console.log('in the next game fct');

        console.log('value',value);

        console.log('step',step);

        if (value === step+1){
            console.log('changing now')
            setSuccess(-1);
            setStep(value);
            
        }else{console.log('error, cant proceed')}

    }





    // Here declaring an object of functions, and putting all the functions there, then passing them as a prop to the GamePage

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