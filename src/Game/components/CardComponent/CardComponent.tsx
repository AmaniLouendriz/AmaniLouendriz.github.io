import { cardInterface } from "../../GameData";
import { useStyles } from "./CardComponent.styles";

import { Card,Group,Image,Text, List } from "@mantine/core";

export const CardComponent = ({card}:{card:cardInterface})=>{
    const {classes} = useStyles();


    return(


        <Card shadow="sm" padding="md" radius="md" withBorder className={classes.card}>
          <Card.Section>
            <Image
              src={card?.image}
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
            <List.Item><b>Code</b> {card?.code}</List.Item>
            <List.Item><b>Value:</b> {card?.value}</List.Item>
            <List.Item><b>Suit:</b> {card?.suit}</List.Item>
          </List>

          </Text>
        </Card>
    )
}