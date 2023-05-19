interface QuestionInterface{
    id:string;
    type:string;
    questionText:string;
    answerOption:answerOptionType[];
}

interface answerOptionType{
    answerId:string;
    answerText:string;
}


export interface objectsInterface{
    count:number|null;
    questions:QuestionInterface[]|null;
}


export const questions:QuestionInterface[]=[
    {
        id:'1',
        type:'stage_1',
        questionText:"Which color do you think the drawn card is going to be?",
        answerOption:[{
            answerId:'1_0',
            answerText:'Black'
        },
        {
            answerId:'1_1',
            answerText:'Red'
        }]


    },
    {
        id:'2',
        type:'stage_2',
        questionText:"Will the new card be higher, lower or equal than the first one?",
        answerOption:[{
            answerId:'2_0',
            answerText:'Lower'
        },
        {
            answerId:'2_1',
            answerText:'Higher'
        },
        {
            answerId:'2_2',
            answerText:'Equal'
        }]


    },

    {
        id:'3',
        type:'stage_3',
        questionText:"Will the new card have hearts, diamonds, clubs or spades?",
        answerOption:[{
            answerId:'3_0',
            answerText:'Hearts'
        },
        {
            answerId:'3_1',
            answerText:'Diamonds'
        },
        {
            answerId:'3_2',
            answerText:'Clubs'
        },
        {
            answerId:'3_3',
            answerText:'Spades'
        }]


    }
]