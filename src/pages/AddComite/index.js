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
  handlerDrawer = () => {
    this.props.navigation.navigate("Drawer");
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
              Criar Comitê
            </Text>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={styles.container}>
            <TextInput placeholder="Nome do Comite" style={styles.input} />
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
            <TextInput
              multiline={true}
              maxLength={500}
              placeholder="Descriçã0 do comitê"
              style={styles.inputMulti}
            />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={this.handlerDrawer}
            >
              <Text style={styles.txtBtn}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
