import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme)=>({

    root:{
        margin:0,
        padding:0,
        display:'flex',
        alignItems:'center',
        height:'100%',


    },

    title:{
        fontSize:'xl',
        margin:'0 auto',


    },

    logo:{
        position: "relative",
        height: 60,
        width: "auto",
        // [theme.fn.smallerThan("sm")]: {
        //     height: 120,
        // },

    },

    link:{
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: 'white',
        fontSize: theme.fontSizes.md,
        fontWeight: 500,
        backgroundColor: '#03045e',
        "&:hover": {
          backgroundColor: '#90e0ef',
        },

    }

   




}))