import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import IconPro from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../components/commonStyles/colors";
import Linear from "../components/bannerMenu/index";
import Footer from "../components/bannerFooterMenu/index";
import Recuperar from "../pages/RecuperarSenha/index";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default props = class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  handlerVoluntario = () => {
    this.props.navigation.navigate("Voluntario");
  };

  handlerPesquisa = () => {
    this.props.navigation.navigate("Pesquisa");
  };

  handlerComites = () => {
    this.props.navigation.navigate("Comites");
  };

  handlerBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView style={{ height: "100%" }}>
        <View
          style={[
            styles.container,
            { backgroundColor: colors.colors.background },
          ]}
        >
          <Linear />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              height: 100,
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <Icon
              name="star"
              size={35}
              style={{
                color: colors.colors.secundary,
                marginRight: 25,
                marginStart: 20,
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.colors.select,
                }}
              >
                450 pontos
              </Text>
              <Text style={{ fontSize: 14, color: colors.colors.shadow }}>
                Nível Um
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ backgroundColor: colors.colors.fundo, width: "100%" }}>
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <Icon name="bell" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Notificações{"\n"} </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: colors.colors.secundary,
                  marginStart: 50,
                }}
              >
                <Text
                  style={{ color: colors.colors.fundo, fontWeight: "bold" }}
                >
                  2
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginTop: 15,
              }}
              activeOpacity={0.7}
            >
              <Icon name="list" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Programa de Governo{"\n"} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              onPress={this.handlerVoluntario}
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <IconPro name="hand-paper" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Seja Voluntário{"\n"} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <Icon name="user" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Minha participação{"\n"} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              onPress={this.handlerPesquisa}
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <Icon name="comment" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Pesquisa de Opinião{"\n"} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <Icon name="star" size={20} style={styles.icon} />
              <TouchableOpacity
                style={{ flexDirection: "column" }}
                activeOpacity={0.7}
              >
                <Text style={styles.textIcon}>Programa de Pontos</Text>
                <Text style={{ fontSize: 12.5, color: colors.colors.shadow }}>
                  Como funciona, histórico de pontos{"\n"}{" "}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <IconPro name="images" size={20} style={styles.icon} />
              <TouchableOpacity
                style={{ flexDirection: "column" }}
                activeOpacity={0.7}
              >
                <Text style={styles.textIcon}>Material Institucional</Text>
                <Text style={{ fontSize: 12.5, color: colors.colors.shadow }}>
                  Santinhos, cartazes...{"\n"}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.fundo,
              width: "100%",
              marginTop: 1,
            }}
          >
            <TouchableOpacity
              onPress={this.handlerComites}
              style={{ flexDirection: "row", marginTop: 15 }}
              activeOpacity={0.7}
            >
              <Icon name="users" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Comitês{"\n"} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.colors.background,
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                height: 50,
                alignItems: "center",
              }}
              activeOpacity={0.7}
              onPress={this.handlerBack}
            >
              <IconPro name="times-circle" size={20} style={styles.icon} />
              <Text style={styles.textIcon}>Sair</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
  },
  textIcon: {
    color: colors.colors.text,
    fontSize: 18,
  },
  icon: {
    color: colors.colors.shadow,
    marginRight: 15,
    marginStart: 15,
    marginTop: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
