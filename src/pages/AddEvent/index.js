import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import IconStyle from "react-native-vector-icons/MaterialIcons";
//import { Dropdown } from "react-native-material-dropdown";
import colors from "../../components/commonStyles/colors";
import styles from "./styles";

export default class Teste extends React.Component {
  constructor(props) {
    super(props);
  }

  AddComite = () => {
    this.props.navigation.navigate("AddComite");
  };

  handlerBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ backgroundColor: colors.colors.background, flex: 1 }}>
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
                marginStart: Platform.OS === "ios" ? 100 : 80,
              }}
            >
              Criar Evento
            </Text>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={styles.container}>
            <TextInput placeholder="Nome do Evento" style={styles.input} />
            <View style={styles.containerStyle}>
              <View style={styles.conteudo}>
                <TextInput placeholder="Estado" style={styles.inputStyle} />
                <Icon name="angle-down" size={24} style={styles.icon} />
              </View>
              <View style={styles.conteudo}>
                <TextInput placeholder="Cidade" style={styles.inputStyle} />
                <Icon name="angle-down" size={24} style={styles.icon} />
              </View>
            </View>
            <TextInput placeholder="Endereço" style={styles.input} />
            <View style={styles.containerStyle}>
              <View style={styles.conteudo}>
                <TextInput
                  placeholder="Data"
                  keyboardType="numeric"
                  maxLength={8}
                  style={styles.inputStyle}
                />
                <Icon name="calendar" size={24} style={styles.icon} />
              </View>
              <View style={styles.conteudo}>
                <TextInput
                  placeholder="Horário"
                  keyboardType="numeric"
                  maxLength={4}
                  style={styles.inputStyle}
                />
              </View>
            </View>
            <TextInput
              multiline={true}
              maxLength={500}
              placeholder="Descreva o evento"
              style={styles.inputMulti}
            />
            <View style={styles.containerGaleria}>
              <TouchableOpacity style={styles.conteudoFoto} activeOpacity={0.7}>
                <Icon name="image" size={20} style={styles.iconFotoG} />
                <Text
                  style={styles.txtFoto}
                >{`Escolher foto \nda galeria`}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.conteudoFoto} activeOpacity={0.7}>
                <Icon name="camera" size={20} style={styles.iconFotoC} />
                <Text style={styles.txtFoto}>Fotografar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={this.AddComite}
            >
              <Text style={styles.txtBtn}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
