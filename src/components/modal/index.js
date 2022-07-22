import React from "react";
import {
  View,
  Modal,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import buttonClose from "../../assets/modalIcons/btnClose.png";
import icon1 from "../../assets/modalIcons/icon1.png";
import icon2 from "../../assets/modalIcons/icon2.png";
import icon3 from "../../assets/modalIcons/icon3.png";
import icon4 from "../../assets/modalIcons/icon4.png";
import styles from "./styles";

export default class Teste extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
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

        <Button
          title="Clique Para Abrir Modal"
          onPress={() => {
            this.setState({ isVisible: true });
          }}
        />
      </View>
    );
  }
}
