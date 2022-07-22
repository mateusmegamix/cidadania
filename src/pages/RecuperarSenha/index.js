import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Banner from "../../components/banner/LinearGradient";
import BannerFooter from "../../components/bannerFooter/LinearGradient";
import styles from "./styles";

export default class Recuperar extends React.Component {
  constructor(props) {
    super(props);
  }
  handlerHome = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Banner />
        </View>
        <ScrollView>
          <View style={{}}>
            <Text style={styles.textTitle}>Esqueci minha senha</Text>
            <Text style={styles.textSub}>
              Insira seu e-mail no campo abaixo e eviaremos uma nova senha
            </Text>
            <TextInput style={styles.input} placeholder="E-mail" />
            <TouchableOpacity
              onPress={this.handlerHome}
              style={styles.buttonEnviar}
              activeOpacity={0.7}
            >
              <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{}}>
          <BannerFooter />
        </View>
      </View>
    );
  }
}
