import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  useNavigation,
  NavigationHelpersContext,
} from "@react-navigation/native";

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home ;D</Text>
    <Button
      title="ir para tela de login"
      onPress={() => navigation.navigate("Login")}
    />
  </View>
);

Page1.navigationOptions = {
  title: "Home",
};

export default Page1;
