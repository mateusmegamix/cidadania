import { StyleSheet, Platform } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  input: {
    marginTop: 10,
    margin: 10,
    backgroundColor: colors.colors.fundo,
    borderRadius: 10,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    flexDirection: "column",
    padding: 20,
  },
  containerConteudo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingEnd: 20,
  },
  txtTitle: {
    paddingStart: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  txtDescription: {
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 10,
    textAlign: "left",
    color: colors.colors.text,
  },
  icon: {
    color: colors.colors.button,
  },
  containerIcon: {
    flexDirection: "row",
    marginTop: 20,
    paddingStart: 20,
    alignItems: "center",
  },
  iconMarker: {
    marginRight: 10,
    color: colors.colors.shadow,
  },
  local: {
    color: colors.colors.shadow,
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 14.5 : 14,
  },
  TouchacleOpacityStyles: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 10,
    borderRadius: 30,
  },
  iconButton: {
    width: 80,
    height: 80,
  },
  containerFiltro: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    paddingEnd: 10,
  },
  textInput: {
    width: "50%",
    marginRight: 10,
    marginTop: 10,
    height: 50,
    paddingLeft: 20,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  containerRegiao: {
    flexDirection: "row",
    width: "100%",
    paddingEnd: 10,
  },
  conteudoRegiao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: colors.colors.fundo,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colors.shadow,
    height: 50,
    marginRight: 10,
    width: "50%",
  },
  inputEstado: {
    paddingLeft: 20,
  },
  iconEstado: {
    paddingRight: 10,
    color: colors.colors.text,
  },
});

export default styles;
