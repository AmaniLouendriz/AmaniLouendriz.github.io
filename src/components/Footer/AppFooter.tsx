import { Text } from "@mantine/core"
import { useStyles } from "./AppFooter.styles";

export const AppFooter = ()=>{

    const {classes} = useStyles();
    return(
        <div className={classes.root}>
            <Text className={classes.footerText}>Made with &#x1F90D; by Amani</Text>
        </div>
    )
}