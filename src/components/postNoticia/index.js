import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import foto from "../../assets/card/card1.png";
import foto2 from "../../assets/card/card2.png";
import IconStyle from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../components/commonStyles/colors";
import styles from "./styles";

export default class PostNoticia extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Card style={styles.containerCard}>
          <View>
            <Image source={foto} style={styles.image} />
            <Text style={styles.category}>Categoria</Text>
            <Text style={styles.txtTitle}>
              Para Alessandro Vieira, reeleição para presidência do Senado na
              mesma legislatura é inconstitucional
            </Text>
            <Text style={styles.txtDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </Text>
            <Text style={styles.txtTime}>30 min atrás</Text>
          </View>
          <View
            style={{
              backgroundColor: "#F3F3FF",
              height: 50,
              marginTop: 20,
              justifyContent: "center",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingStart: 20,
                }}
                activeOpacity={0.5}
              >
                <IconStyle
                  name="favorite"
                  size={24}
                  style={{ color: colors.colors.select, marginRight: 5 }}
                />
                <Text style={{ color: colors.colors.select }}>14</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingEnd: 20,
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{ marginRight: 5 }}
                >{`Compartilhe e \nganhe 100 pontos`}</Text>
                <IconStyle name="share" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </Card>

        <Card style={styles.containerCard}>
          <View>
            <Image source={foto2} style={styles.image} />
            <Text style={styles.category}>Categoria</Text>
            <Text style={styles.txtTitle}>
              Programa de renda básica para a primeira infância proposto por
              Eliziane Gama será analisado pelo Senado
            </Text>
            <Text style={styles.txtDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </Text>
            <Text style={styles.txtTime}>30 min atrás</Text>
          </View>
          <View
            style={{
              backgroundColor: "#F3F3FF",
              height: 50,
              marginTop: 20,
              justifyContent: "center",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingStart: 20,
                }}
                activeOpacity={0.5}
              >
                <IconStyle
                  name="favorite"
                  size={24}
                  style={{ color: colors.colors.shadow, marginRight: 5 }}
                />
                <Text style={{ color: colors.colors.shadow }}>79</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingEnd: 20,
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{ marginRight: 5 }}
                >{`Compartilhe e \nganhe 100 pontos`}</Text>
                <IconStyle name="share" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
