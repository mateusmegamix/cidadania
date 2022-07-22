import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-material-dropdown";
import button from "../../assets/button.png";
import Icon from "react-native-vector-icons/FontAwesome"; //MaterialIcons
import styles from "./styles";

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerBack = () => {
    this.props.navigation.goBack();
  };

  handlerNameComite = () => {
    this.props.navigation.navigate("NomeComite");
  };

  AddEvent = () => {
    this.props.navigation.navigate("AddEvento");
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
                marginStart: Platform.OS === "ios" ? 130 : 100,
              }}
            >
              Comitês
            </Text>
          </View>
        </LinearGradient>
        <View style={{ margin: 10 }}>
          <View style={styles.containerRegiao}>
            <View style={styles.conteudoRegiao}>
              <TextInput
                placeholder="Filtrar por estado"
                style={styles.inputEstado}
              />
              <Icon name="angle-down" size={24} style={styles.iconEstado} />
            </View>
            <View style={styles.conteudoRegiao}>
              <TextInput
                placeholder="Filtrar por cidade"
                style={styles.inputEstado}
              />
              <Icon name="angle-down" size={24} style={styles.iconEstado} />
            </View>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={styles.input}
            activeOpacity={0.7}
            onPress={this.handlerNameComite}
          >
            <View style={styles.containerConteudo}>
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Nome do Comitê</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
                <View style={styles.containerIcon}>
                  <Icon name="map-marker" size={24} style={styles.iconMarker} />
                  <Text style={styles.local}>Belo Horizonte - MG</Text>
                </View>
              </View>
              <Icon name="angle-right" size={40} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.input}
            activeOpacity={0.7}
            onPress={this.handlerNameComite}
          >
            <View style={styles.containerConteudo}>
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Nome do Comitê</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
                <View style={styles.containerIcon}>
                  <Icon name="map-marker" size={24} style={styles.iconMarker} />
                  <Text style={styles.local}>Belo Horizonte - MG</Text>
                </View>
              </View>
              <Icon name="angle-right" size={40} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.input}
            activeOpacity={0.7}
            onPress={this.handlerNameComite}
          >
            <View style={styles.containerConteudo}>
              <View style={styles.containerText}>
                <Text style={styles.txtTitle}>Nome do Comitê</Text>
                <Text style={styles.txtDescription}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Text>
                <View style={styles.containerIcon}>
                  <Icon name="map-marker" size={24} style={styles.iconMarker} />
                  <Text style={styles.local}>Belo Horizonte - MG</Text>
                </View>
              </View>
              <Icon name="angle-right" size={40} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.AddEvent}
          style={styles.TouchacleOpacityStyles}
        >
          <Image source={button} style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}
