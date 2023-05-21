import { Header } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { useStyles } from "./AppHeader.styles";

export const AppHeader = ()=>{


    const { classes } = useStyles();


    return(

        <>
            <Header height={70} className={classes.prop}>

                Card Game

            </Header>

            <Outlet/>

        </>      
    )





}