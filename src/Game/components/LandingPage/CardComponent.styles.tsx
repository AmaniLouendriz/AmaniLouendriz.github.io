import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme)=>({

    card:{
        "&:hover": {
            transform:'rotateY(50deg)',
            transition: 'transform 2s'
        },

        boxShadow:'5px 5px #caf0f8',
    }




    
}))