export const QuestionItem = ({step}:{step:number|null})=>{

    const count = step;


    const getQuestion = (count:number|null)=>{
        switch(count){
            case 1:
                return(<>First question Here</>)
            case 2:
                return(<></>)
            case 3:
                return(<></>)
            default:
                return<></>
        }

    }


    return(
        <>
        {getQuestion(count)}
        </>

    )
        
}