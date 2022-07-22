import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient"; //MaterialIcons
import styles from "./styles";

export default class Event extends React.Component {
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
              Pesquisa de Opinião
            </Text>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
              <View style={styles.containerConteudo}>
                <View style={styles.containerText}>
                  <Text style={styles.txtTitle}>Categoria</Text>
                  <Text style={styles.txtDescription}>
                    Você é a favor do lorem ipsum dolor abmet seilor tusto
                    chantenel albus dumbe?
                  </Text>
                </View>
                <Icon name="angle-right" size={30} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
              <View style={styles.containerConteudo}>
                <View style={styles.containerText}>
                  <Text style={styles.txtTitle}>Categoria</Text>
                  <Text style={styles.txtDescription}>
                    Você é a favor do lorem ipsum dolor abmet seilor tusto
                    chantenel albus dumbe?
                  </Text>
                </View>
                <Icon name="angle-right" size={30} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
              <View style={styles.containerConteudo}>
                <View style={styles.containerText}>
                  <Text style={styles.txtTitle}>Categoria</Text>
                  <Text style={styles.txtDescription}>
                    Você é a favor do lorem ipsum dolor abmet seilor tusto
                    chantenel albus dumbe?
                  </Text>
                </View>
                <Icon name="angle-right" size={30} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
              <View style={styles.containerConteudo}>
                <View style={styles.containerText}>
                  <Text style={styles.txtTitle}>Categoria</Text>
                  <Text style={styles.txtDescription}>
                    Você é a favor do lorem ipsum dolor abmet seilor tusto
                    chantenel albus dumbe?
                  </Text>
                </View>
                <Icon name="angle-right" size={30} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
