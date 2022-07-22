import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import colors from "../commonStyles/colors";
import styles from "./styles"
import PostAgenda from "../postAgenda/index";

export default class Agenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isVisible: false,
     // == filtro ==
     ftSelect: colors.colors.fundo,
     ftNotSelect: colors.colors.text,
     fbSelect: colors.colors.buttonF,
     fbNotSelect: colors.colors.fundo,
    }
  }

  filtroTodos = () => {
    this.setState({
      ftNotSelect: colors.colors.text,
      fbNotSelect: colors.colors.fundo,
      ftSelect: colors.colors.fundo,
      fbSelect: colors.colors.buttonF,
    })
  }

  filtroCandidato = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    })
  }

  filtroGoverno = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    })
  }

  filtroPartido = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    })
  }

  handlerEvent = () => {
    this.props.navigation.navigate("Evento");
  };

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.containerBtnFiltro}>
          <TouchableOpacity
            style={[styles.buttonFiltro, {backgroundColor: this.state.fbSelect}]}
            activeOpacity={0.8}
            onPress={this.filtroTodos}
          >
            <Text style={{justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "bold",
              margin: Platform.OS === "ios" ? 1 : -3,
              color: this.state.ftSelect,}}>
                Todos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonFiltro, {backgroundColor: this.state.fbNotSelect}]} 
            activeOpacity={0.7} 
            onPress={this.filtroCandidato}
          >
            <Text style={{justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: this.state.ftNotSelect,}}
            >
                  Candidato
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonFiltro, {backgroundColor: this.state.fbNotSelect}]} 
            activeOpacity={0.7}
            onPress={this.filtroGoverno}
          >
            <Text style={{justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: this.state.ftNotSelect,}}
            >
                  Governo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonFiltro, {backgroundColor: this.state.fbNotSelect}]} 
            activeOpacity={0.7} 
            onPress={this.filtroPartido}
          >
           <Text style={{justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: this.state.ftNotSelect,}}
            >
                  Partido
            </Text>
          </TouchableOpacity>
        </View>
        <PostAgenda navigation={this.props.navigation}/>
      </View>
    );
  }
}
