import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import Banner from "../../components/banner/LinearGradient";
import BannerFooter from "../../components/bannerFooter/LinearGradient";
import colors from "../../components/commonStyles/colors";

export default class Usuario extends Component {
  constructor(props) {
    super(props);
  }

  handlerPerfil = () => {
    this.props.navigation.navigate("Perfil");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerLogo}>
            <Banner />
          </View>

          <Text style={styles.textTitle}>Cadastro</Text>
          <Text style={styles.textSub}>
            {`Preencha os dados abaixo em 2 etapas. \nÉ bem simples e rápido!`}
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.containerIcon}>
              <TouchableOpacity style={styles.dadosIniciais}>
                <Text style={styles.borderIcon}>1</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textIcon}>Dados iniciais</Text>
                <Text style={styles.text}>
                  Todos os dados deve ser preenchidos
                </Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.containerInput}>
              <TextInput style={styles.input} placeholder="Nome" />
              <TextInput style={styles.input} placeholder="Celular" />
              <TextInput style={styles.input} placeholder="Senha" />
              <TextInput style={styles.input} placeholder="Confirmar Senha" />
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.containerTermos}>
              <CheckBox style={styles.checkbox} />
              <Text style={styles.text}>Li e aceito os </Text>
              <Text style={{ color: colors.colors.title, fontWeight: "bold" }}>
                Termo de Uso
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={this.handlerPerfil}
              style={styles.buttonEnviar}
              activeOpacity={0.7}
            >
              <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFacebook} activeOpacity={0.7}>
              <Icon name="facebook-f" style={styles.icoFacebook} />
              <Text style={styles.textButton}>Login com Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 70 }}>
            <BannerFooter />
          </View>
        </ScrollView>
      </View>
    );
  }
}
