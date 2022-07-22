import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/person.png";
import colors from "../commonStyles/colors";

class Banner extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{ y: 1.0, x: 0.0 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={["#24C0AB", "#EC008C"]}
        style={{
          backgroundColor: colors.colors.background,
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          height: 200,
          width: "100%",
          marginTop: Platform.OS === "ios" ? -30 : -60,
          borderRadius: 30,
          borderBottomLeftRadius: Platform.OS === "ios" ? 0 : 30,
          borderBottomRighttRadius: Platform.OS === "ios" ? 0 : 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginStart: 20,
            marginTop: 60,
          }}
        >
          <Image source={logo} style={{ width: 70, height: 70 }} />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: colors.colors.fundo,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Eliana Martins
            </Text>
            <Text style={{ color: colors.colors.intro, marginTop: 5 }}>
              Ver Meu Perfil
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default Banner;
