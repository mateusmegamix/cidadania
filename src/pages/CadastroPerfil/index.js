import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import Banner from "../../components/banner/LinearGradient";
import BannerFooter from "../../components/bannerFooter/LinearGradient";

export default class Usuario extends Component {
  constructor(props) {
    super(props);
  }

  handlerProx = () => {
    this.props.navigation.navigate("Home");
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

          <View style={styles.containerIcons}>
            <TouchableOpacity style={styles.containerIcon1}>
              <TouchableOpacity style={styles.dadosInicias}>
                <Icon name="check" style={styles.borderIcon1} />
              </TouchableOpacity>
              <View>
                <Text style={styles.textIcon1}>Dados iniciais</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.containerIcon2}>
              <TouchableOpacity style={styles.tipoPerfil}>
                <Text style={styles.borderIcon2}>2</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textIcon2}>
                  Selecione seu tipo de perfil
                </Text>
                <Text style={styles.text}>
                  De acordo com o perfiliremos selecionar a melhor maneira de
                  passar as informações.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.containerSelections}>
            <TouchableOpacity style={styles.selection} activeOpacity={0.7}>
              <View style={styles.ajuste}>
                <Icon name="circle-thin" style={styles.iconSelection} />
                <Text style={styles.textSelection}>
                  Quero receber informações do projeto, mas não sei se vou
                  participar
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selection} activeOpacity={0.7}>
              <View style={styles.ajuste}>
                <Icon name="circle-thin" style={styles.iconSelection} />
                <Text style={styles.textSelection}>
                  Estou convencido e quero participar
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selection} activeOpacity={0.7}>
              <View style={styles.ajuste}>
                <Icon name="circle-thin" style={styles.iconSelection} />
                <Text style={styles.textSelection}>
                  Vou participar e serei voluntário
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selection} activeOpacity={0.7}>
              <View style={styles.ajuste}>
                <Icon name="circle-thin" style={styles.iconSelection} />
                <Text style={styles.textSelection}>
                  Quero ser voluntário e me filiar ao partido
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 100 }}>
            <BannerFooter />
          </View>
        </ScrollView>
      </View>
    );
  }
}
