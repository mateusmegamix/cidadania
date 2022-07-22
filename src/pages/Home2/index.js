import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Modal,
} from "react-native";
import colors from "../../components/commonStyles/colors";
import buttonClose from "../../assets/modalIcons/btnClose.png";
import icon1 from "../../assets/modalIcons/icon1.png";
import icon2 from "../../assets/modalIcons/icon2.png";
import icon3 from "../../assets/modalIcons/icon3.png";
import icon4 from "../../assets/modalIcons/icon4.png";
import Carousel from "../../components/carousel/index";
import Noticia from "../../components/noticias/index";
import Agenda from "../../components/agenda/index";
import styles from "./styles";
import button from "../../assets/button.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      txtNaoSelecionado: colors.colors.fundo,
      txtSelecionado: colors.colors.text,
      backNaoSelecionado: colors.colors.select,
      backSelecionado: colors.colors.fundo,

      // == filtro ==
      ftSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.text,
      fbSelect: colors.colors.buttonF,
      fbNotSelect: colors.colors.fundo,

      //==
      conteudo: (
        <View>
          <Text>Teste</Text>
        </View>
      ),
    };
  }

  funcaoBtn1 = () => {
    this.setState({
      txtNaoSelecionado: colors.colors.text,
      backNaoSelecionado: colors.colors.fundo,
      txtSelecionado: colors.colors.fundo,
      backSelecionado: colors.colors.select,
    });
    this.props.navigation.goBack();
  };

  funcaoBtn2 = () => {
    this.setState({
      txtSelecionado: colors.colors.text,
      backSelecionado: colors.colors.fundo,
      txtNaoSelecionado: colors.colors.fundo,
      backNaoSelecionado: colors.colors.select,
    });
  };

  filtroTodos = () => {
    this.setState({
      ftNotSelect: colors.colors.text,
      fbNotSelect: colors.colors.fundo,
      ftSelect: colors.colors.fundo,
      fbSelect: colors.colors.buttonF,
    });
  };

  filtroCandidato = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    });
  };

  filtroGoverno = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    });
  };

  filtroPartido = () => {
    this.setState({
      ftSelect: colors.colors.text,
      fbSelect: colors.colors.fundo,
      ftNotSelect: colors.colors.fundo,
      fbNotSelect: colors.colors.buttonF,
    });
  };

  handlerEvent = () => {
    this.props.navigation.navigate("Evento");
  };

  handlerDrawer = () => {
    this.props.navigation.navigate("Drawer");
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ height: 260, marginTop: 20 }}>
              <Carousel />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: this.state.backSelecionado },
                ]}
                activeOpacity={0.8}
                onPress={this.funcaoBtn1}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: this.state.txtSelecionado,
                  }}
                >
                  Notícias
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button2,
                  { backgroundColor: this.state.backNaoSelecionado },
                ]}
                activeOpacity={0.8}
                onPress={this.funcaoBtn2}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: this.state.txtNaoSelecionado,
                  }}
                >
                  Agenda
                </Text>
              </TouchableOpacity>
            </View>

            <Agenda navigation={this.props.navigation} />
          </View>
        </ScrollView>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => {
            this.setState({ isVisible: false });
          }}
        >
          <View style={styles.modal}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginStart: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                  <Image source={icon1} style={{ width: 50, height: 50 }} />
                  <Text style={styles.text}>Colabores com a mudança</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                  <Image source={icon2} style={{ width: 50, height: 50 }} />
                  <Text style={styles.text}>Responda uma pesquisa</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                  <Image source={icon3} style={{ width: 45, height: 42 }} />
                  <Text style={styles.text}>
                    Participe enviando uma sugestão
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
                  <Image source={icon4} style={{ width: 65, height: 50 }} />
                  <Text style={styles.text}>Conheça a proposta de governo</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.setState({ isVisible: false });
              }}
              style={styles.TouchacleOpacityStyles}
            >
              <Image source={buttonClose} style={styles.iconButton} />
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.setState({ isVisible: true });
          }}
          style={styles.TouchacleOpacityStyles}
        >
          <Image source={button} style={styles.iconButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
