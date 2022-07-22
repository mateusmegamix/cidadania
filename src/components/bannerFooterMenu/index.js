import React from "react";
import { Text, View, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../commonStyles/colors";

class Banner extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{ y: 1.0, x: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#24C0AB", "#EC008C"]}
        style={{
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          height: 200,
          paddingBottom: 60,
          width: "100%",
          marginBottom: Platform.OS === "ios" ? -100 : -100,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: -40 }}>
          <Icon
            name="facebook-f"
            size={24}
            style={{
              color: colors.colors.fundo,
              marginStart: 30,
              marginRight: 25,
            }}
          />
          <Icon
            name="twitter"
            size={24}
            style={{ color: colors.colors.fundo, marginRight: 25 }}
          />
          <Icon
            name="instagram"
            size={24}
            style={{ color: colors.colors.fundo, marginRight: 25 }}
          />
          <Icon
            name="linkedin"
            size={24}
            style={{ color: colors.colors.fundo }}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default Banner;
