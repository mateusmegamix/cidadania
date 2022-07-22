import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class PostAgenda extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View style={styles.containerAgenda}>
          <TouchableOpacity style={styles.btnTime} activeOpacity={1.0}>
            <Text style={styles.txtDay}>{"21"}</Text>
            <Text style={styles.txtMounth}>{"ago"}</Text>
            <Text style={styles.txtHour}>{"-\n10h30"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEvent} activeOpacity={0.8}>
            <Text style={styles.txtEvent}>
              Título do evento em até duas linhas de extensão
            </Text>
            <Text style={styles.txtRegiao}>Belo Horizonte - MG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAgenda}>
          <TouchableOpacity style={styles.btnTime} activeOpacity={1.0}>
            <Text style={styles.txtDay}>{"21"}</Text>
            <Text style={styles.txtMounth}>{"ago"}</Text>
            <Text style={styles.txtHour}>{"-\n10h30"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEvent} activeOpacity={0.8}>
            <Text style={styles.txtEvent}>
              Título do evento em até duas linhas de extensão
            </Text>
            <Text style={styles.txtRegiao}>Belo Horizonte - MG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAgenda}>
          <TouchableOpacity style={styles.btnTime} activeOpacity={1.0}>
            <Text style={styles.txtDay}>{"21"}</Text>
            <Text style={styles.txtMounth}>{"ago"}</Text>
            <Text style={styles.txtHour}>{"-\n10h30"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEvent} activeOpacity={0.8}>
            <Text style={styles.txtEvent}>
              Título do evento em até duas linhas de extensão
            </Text>
            <Text style={styles.txtRegiao}>Belo Horizonte - MG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAgenda}>
          <TouchableOpacity style={styles.btnTime} activeOpacity={1.0}>
            <Text style={styles.txtDay}>{"21"}</Text>
            <Text style={styles.txtMounth}>{"ago"}</Text>
            <Text style={styles.txtHour}>{"-\n10h30"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEvent} activeOpacity={0.8}>
            <Text style={styles.txtEvent}>
              Título do evento em até duas linhas de extensão
            </Text>
            <Text style={styles.txtRegiao}>Belo Horizonte - MG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerAgenda}>
          <TouchableOpacity style={styles.btnTime} activeOpacity={1.0}>
            <Text style={styles.txtDay}>{"21"}</Text>
            <Text style={styles.txtMounth}>{"ago"}</Text>
            <Text style={styles.txtHour}>{"-\n10h30"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEvent} activeOpacity={0.8}>
            <Text style={styles.txtEvent}>
              Título do evento em até duas linhas de extensão
            </Text>
            <Text style={styles.txtRegiao}>Belo Horizonte - MG</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
