import { AppShellProps, Footer, Header,AppShell as Shell } from "@mantine/core"
import { AppHeader } from "../AppHeader"
import { Outlet } from "react-router-dom";
import { useStyles } from "./AppShell.styles";

export const AppShell = ()=>{

    const {classes} = useStyles();

    return (

        <Shell
            
            fixed 
            header={
                <Header height={70} p='md' className={classes.shell}>
                    <AppHeader/>
                </Header>
            }
        
            footer={
                <Footer height={70} p="md">
                     Made by Amani
                </Footer>
            }>

            <Outlet/>
        </Shell>
    );
};