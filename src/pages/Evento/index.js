import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import foto from "../../assets/card/card1.png";
import person from "../../assets/person.png";
import colors from "../../components/commonStyles/colors";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
//import Teste from "../../components/modal/index";

export default class Evento extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerBack = () => {
    this.props.navigation.goBack();
  };

  teste = () => {
    this.props.navigation.navigate("Drawer");
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
                marginStart: Platform.OS === "ios" ? 130 : 110,
              }}
            >
              Evento
            </Text>
          </View>
        </LinearGradient>
        <Image source={foto} style={{ marginTop: 0 }} />
        <View style={styles.containerDescription}>
          <TouchableOpacity style={styles.input} activeOpacity={0.8}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.txtTitle}>Evento Lorem Ipsum</Text>
              </View>
              <View style={styles.icon}>
                <IconStyle
                  name="favorite-border"
                  style={{ marginRight: 5 }}
                  size={24}
                />
                <Text style={{ marginRight: 10 }}>182</Text>
                <IconStyle name="share" size={24} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 25,
                marginRight: 20,
                marginBottom: 15,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="map-marker"
                  size={24}
                  style={{ marginRight: 20, color: colors.colors.shadow }}
                />
                <Text
                  style={styles.txtEvent}
                >{`Rua Nonumy Eirmod Tempor, Lorem Ipsum \nBelo Horizonte - MG`}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Icon
                  name="calendar"
                  size={24}
                  style={{ marginRight: 20, color: colors.colors.shadow }}
                />
                <Text style={styles.txtEvent}>21 de Agosto de 2020</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 12.5 }}>
              Amigos do Facebook que confirmaram:
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 15,
                marginBottom: 25,
              }}
            >
              <TouchableOpacity style={styles.btnFacebook} activeOpacity={0.7}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={person}
                    style={{ width: 50, height: 50, marginRight: 5 }}
                  />
                  <Image
                    source={person}
                    style={{ width: 50, height: 50, marginRight: 5 }}
                  />
                  <Image
                    source={person}
                    style={{ width: 50, height: 50, marginRight: 5 }}
                  />
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      marginRight: 5,
                      backgroundColor: colors.colors.buttonF,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    activeOpacity={0.7}
                  >
                    <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                      +5
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <Text style={styles.txtBtn}>Cadastre seu facebook</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={this.teste}
              >
                <Text style={styles.txtBtn}>Eu vou!</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>Descrição</Text>
            <Text style={styles.txtDescription}>
              {`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            \nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.`}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
