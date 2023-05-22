export interface QuestionInterface{
    id:string;
    type:string;
    questionText:string;
    answerOption:answerOptionType[];
}

export interface answerOptionType{
    answerId:string;
    answerText:string;
}


export interface objectsInterface{
    count:number;
    questions:QuestionInterface[];
    getInitialState: Record<string,{[key:string]:string}>;
    success:number;
}

export interface cardInterface{
    code:string,
    image:string,
    images:Record<string,string>;
    suit:string,
    value:string,
}


export const questions:QuestionInterface[]=[
    {
        id:'1',
        type:'stage_1',
        questionText:"Which color do you think the drawn card is going to be?",
        answerOption:[
            {
                answerId:'1_0',
                answerText:'',
            },
            {
                answerId:'1_0',
                answerText:'Black',
            },
            {
                answerId:'1_1',
                answerText:'Red',
            },
       
    ]


    },
    {
        id:'2',
        type:'stage_2',
        questionText:"Will the new card be higher, lower or equal than the first one?",
        answerOption:[
            {
                answerId:'2_0',
                answerText:'',
            },
            {
                answerId:'2_1',
                answerText:'Lower',
            },
            {
                answerId:'2_2',
                answerText:'Higher',
            },
            {
                answerId:'2_3',
                answerText:'Equal'
            }]


    },

    {
        id:'3',
        type:'stage_3',
        questionText:"Will the new card have hearts, diamonds, clubs or spades?",
        answerOption:[
            {
                answerId:'3_0',
                answerText:''
            },
            {
            answerId:'3_1',
            answerText:'Hearts'
        },
        {
            answerId:'3_2',
            answerText:'Diamonds'
        },
        {
            answerId:'3_3',
            answerText:'Clubs'
        },
        {
            answerId:'3_4',
            answerText:'Spades'
        }]


    }
]


export const numericalValues:Record<string,number> = {
    'ACE':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'KING':12,
    'QUEEN':13,
    'JACK':14,

}