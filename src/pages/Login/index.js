import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import colors from "../../components/commonStyles/colors";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerHome = () => {
    this.props.navigation.navigate("Drawer");
  };

  handlerRecuperar = () => {
    this.props.navigation.navigate("Recuperar");
  };

  handlerUser = () => {
    this.props.navigation.navigate("Usuario");
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.colors.primary, "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 850,
          }}
        />

        <Image source={logo} style={styles.imgLogo} />
        <Text style={styles.textTitle}>Seja Bem Vindo!</Text>
        <Text style={styles.textSubTitulo}>
          Antes de seguir, você precisa se identificar
        </Text>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Senha" />
        </View>
        <TouchableOpacity
          style={styles.buttonEntrar}
          activeOpacity={0.7}
          onPress={this.handlerHome}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text onPress={this.handlerRecuperar} style={styles.txtEsq}>
          Esqueci minha senha
        </Text>
        <TouchableOpacity style={styles.buttonFacebook} activeOpacity={0.7}>
          <Icon name="facebook-f" style={styles.icoFacebook} />
          <Text style={styles.textButton}>Login com Facebook</Text>
        </TouchableOpacity>
        <Text style={styles.txtCad} onPress={this.handlerUser}>
          Cadastre-se
        </Text>
      </View>
    );
  }
}
