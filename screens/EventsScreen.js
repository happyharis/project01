import * as React from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events!</Text>
      <Button
        onPress={() => navigation.navigate("EventsDetails")}
        title="Go to Details"
      />
    </View>
  );
}

function EventsDetails({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
      }}
    >
      <Text>Events Details!</Text>
      <Button
        onPress={() => navigation.navigate("EventsProfile")}
        title="Go to Profile"
      />
    </View>
  );
}

function EventsProfile({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events Profile!</Text>
      <Button onPress={() => navigation.popToTop()} title="Go Home" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsDetails" component={EventsDetails} />
      <Stack.Screen name="EventsProfile" component={EventsProfile} />
    </Stack.Navigator>
  );
}
