import React from "react";
import { Text, View } from "react-native";
import { List, Card, Title, Paragraph } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Title style={{ marginVertical: 20 }}>
        Basket Throwing Tournament 2020
      </Title>
      <Card>
        <Card.Content>
          <Title>Welcome</Title>
          <Paragraph>
            This is a tournament for the Basket Throwing game. The game is
            played with two teams of two players each. The teams are randomly
            assigned to the tournament. The game is played in a round-robin
            fashion. The winner of each round is awarded with a point. The
            winner of the tournament is the team with the most points.
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      </Card>

      <List.Section title="Frequently Asked Questions">
        <List.Accordion title="What is this for?">
          <List.Item title="We celebrate the birth of potatoes." />
        </List.Accordion>
        <List.Accordion title="When will this be?">
          <List.Item title="Whenever this pandemic is over." />
        </List.Accordion>
        <List.Accordion title="Where will this be?">
          <List.Item title="Ireland" />
        </List.Accordion>
      </List.Section>
    </View>
  );
}
