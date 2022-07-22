import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/logo_retina.png";

class Banner extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{ y: 1.0, x: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#24C0AB", "#EC008C"]}
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 150,
          paddingTop: 20,
          marginTop: -80,
          borderRadius: 30,
          borderBottomLeftRadius: Platform.OS === "ios" ? 0 : 30,
          borderBottomRighttRadius: Platform.OS === "ios" ? 0 : 30,
        }}
      >
        <Image source={logo} />
      </LinearGradient>
    );
  }
}

export default Banner;
