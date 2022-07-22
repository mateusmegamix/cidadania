import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import time from "../../assets/voluntario/tempo.png";
import money from "../../assets/voluntario/dinheiro.png";
import share from "../../assets/voluntario/compartilhar.png";
import friend from "../../assets/voluntario/amigos.png";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ y: 1.0, x: 0.0 }}
          end={{ x: 0.9, y: 1.0 }}
          colors={["#24C0AB", "#EC008C"]}
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            height: 160,
            paddingTop: 80,
            paddingStart: 10,
            marginTop: -80,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 25 }}>
            <IconStyle
              onPress={this.handlerBack}
              name="arrow-back"
              size={30}
              style={{ color: "#FFF" }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 20,
                marginStart: Platform.OS === "ios" ? 90 : 60,
              }}
            >
              Seja Voluntário
            </Text>
          </View>
        </LinearGradient>
        <ScrollView>
          <TouchableOpacity style={styles.input} activeOpacity={0.7}>
            <View style={styles.containerImage}>
              <Image source={time} style={styles.image} />
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Doe seu tempo</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} activeOpacity={0.7}>
            <View style={styles.containerImage}>
              <Image source={money} style={styles.image} />
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Doe seu tempo</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} activeOpacity={0.7}>
            <View style={styles.containerImage}>
              <Image source={share} style={styles.image} />
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Doe seu tempo</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} activeOpacity={0.7}>
            <View style={styles.containerImage}>
              <Image source={friend} style={styles.image} />
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Doe seu tempo</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
