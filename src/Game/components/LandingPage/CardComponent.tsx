import { cardImage } from "../../../assets";
import { useStyles } from "./CardComponent.styles";

import { Card,Group,Image,Badge,Text,Button, List } from "@mantine/core";

export const CardComponent = ({image}:{image:string})=>{
    const {classes} = useStyles();


    return(


        <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
          <Card.Section>
            <Image
              src={image}
              height={'auto'}
              alt="card picture"
              fit="fill"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Important properties</Text>
          </Group>

          <Text size="sm" color="dimmed">

          <List>
            <List.Item><b>Color:</b> Red</List.Item>
            <List.Item><b>Value:</b> 6</List.Item>
            <List.Item><b>Suit:</b> Heart</List.Item>
          </List>

          </Text>
        </Card>
    )
}