import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme)=>({

    row:{

        boxSizing:"border-box",
        display:"flex",

    },


    column:{

        float: "left",
        width: "50%",
        padding: "10px",
        display:'flex',
        flexDirection:'column',

    },


    title:{

        padding:'5px',


    },

    intro:{

        padding:'20px',

        margin:'10px',
        backgroundColor:'#90e0ef',

        justifyContent: "center",

        height:'auto',

        borderRadius:'20px',

        textAlign:'justify',

        boxShadow:'5px 5px #caf0f8',




    },

    startBtn:{
        padding:'8px',
        borderRadius:'10px',
        paddingInline:'8px',
        "&:hover": {
            backgroundColor: theme.white[1],
            color:theme.colors.dark,
        },
        margin:'0 auto',

        width:'25%',




    },


    
}))