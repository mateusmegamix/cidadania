import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default class gradient extends React.Component {
  render() {
    return (
      <View style={{}}>
        <LinearGradient
          start={{ y: 1.0, x: 0.0 }}
          end={{ x: 0.9, y: 1.0 }}
          colors={["#EC008C", "#24C0AB"]}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "35%",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Icon
              name="bars"
              style={{
                color: "#fff",
                marginStart: 30,
                marginTop: 50,
              }}
              size={30}
            />
            <Icon
              name="search"
              style={{
                color: "#fff",
                marginStart: 30,
                marginTop: 50,
                marginStart: 300,
              }}
              size={30}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}
