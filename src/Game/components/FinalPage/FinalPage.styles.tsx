import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme)=>({

    row:{
        display:'flex',
        flexDirection:'row',
        margin:'0 auto',
        justifyContent:'center',

    },

    column:{

        display:'flex',
        flexDirection:'column',
        padding:'20px',
    },

    title:{
        margin:'0 auto',
        padding:'20px',
        textAlign: 'center',

    },

    titleSec:{
        margin:'0 auto',
        textAlign:'center',
    },

    btn:{
        float:'right',
        display:'flex',
        flexDirection:'column',


        color:theme.white,

        backgroundColor:'#0077b6',

        margin:'2px',


    },

}))