import React from "react";
import { View, Text, ScrollView } from "react-native";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import PostAgenda from "../../components/postAgenda/PostAgendaSemFiltro/index";
import styles from "./styles";

export default class Teste extends React.Component {
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
              Nome do comitê
            </Text>
          </View>
        </LinearGradient>
        <View style={{ padding: 15 }}>
          <ScrollView>
            <Text style={styles.txtTitle}>Detalhes</Text>
            <Text style={styles.txt}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
            <View style={styles.containerLocal}>
              <Icon name="map-marker" size={22} style={styles.icon} />
              <Text
                style={styles.local}
              >{`Rua Nonumy Eirmod Tempor, Lorem Ipsum \nBelo Horizonte - MG`}</Text>
            </View>
            <PostAgenda />
          </ScrollView>
        </View>
      </View>
    );
  }
}
