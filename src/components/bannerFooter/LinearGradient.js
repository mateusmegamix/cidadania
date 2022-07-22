import React from "react";
import { Text, View, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }
  handlerBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <LinearGradient
        start={{ y: 1.0, x: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#24C0AB", "#EC008C"]}
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          height: 150,
          paddingBottom: 60,
          borderRadius: Platform.OS === "ios" ? 30 : 0,
          borderTopLeftRadius: Platform.OS === "ios" ? 0 : 30,
          borderTopRightRadius: Platform.OS === "ios" ? 0 : 30,
        }}
      >
        <Text
          onPress={() => {}}
          style={{ color: "#FFFFFF", fontWeight: "bold" }}
        >
          Voltar a tela de Login
        </Text>
      </LinearGradient>
    );
  }
}

export default Banner;
