import { createStyles} from "@mantine/core";




export const useStyles = createStyles((theme)=>({



    row:{

        boxSizing:"border-box",
        alignItems:'center',
        justifyContent:'center',

        display:'flex',

        "&::-webkit-scrollbar":{
            display: 'none',
        },

        flexDirection:'row',


        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },


    column:{

        float: "left",
        width: "50%",
        padding: "10px",
        display:'flex',
        flexDirection: 'column',

        alignItems:'center',
        justifyContent:'center',


        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'row',
            width:'100%',
          },

       

    },


    title:{

        padding:'5px',
        position:'relative',
    },

    intro:{

        padding:'40px',

        margin:'40px',
        backgroundColor:'#90e0ef',

        justifyContent: "center",

        height:'auto',

        borderRadius:'20px',

        textAlign:'justify',

        boxShadow:'5px 5px #caf0f8',
        position:'relative',
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
        position:'relative',
    },

    staticImage:{

        "&:hover": {
            transform:'rotateY(50deg)',
            transition: 'transform 2s ease'
        },

        boxShadow:'5px 5px #caf0f8',


    },



    
}))