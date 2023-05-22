import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme)=>({

    section:{
        margin:'0 auto',
        alignItems:'center',


    },

    question:{
        textAlign:'center',

        padding:'20px',
    },


    select:{
        borderRadius:'40px',

        width:'50%',
        margin:'0 auto',

    },


    btns:{

        display:'flex',
        flexDirection:'row',

        margin:'30px',

        float:'right',

    },


    nextBtn:{

        display:'flex',
        flexDirection:'column',


        color:theme.white,

        backgroundColor:'#0077b6',



    },

    cancelBtn:{
        display:'flex',
        flexDirection:'column',

        marginRight:'30px',

        color:theme.white,

        backgroundColor:theme.white[3],

    },

    



}))