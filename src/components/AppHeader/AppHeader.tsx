import { Center, Title, UnstyledButton } from "@mantine/core"
import { useStyles } from "./AppHeader.styles";

import {logo} from '../../assets'

export const AppHeader = ()=>{


    const { classes } = useStyles();


    return(

        <div className={classes.root}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <Title className={classes.title}>Guess What?</Title>

            <UnstyledButton className={classes.link}>
                <Center>Feedback</Center>
            </UnstyledButton>

        </div>      
    )





}