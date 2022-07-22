import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  containerLogo: {
    paddingTop: "18%",
    width: "100%",
  },
  textTitle: {
    color: colors.colors.title,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  textSub: {
    textAlign: "center",
    marginTop: 10,
    color: colors.colors.text,
  },
  text: {
    textAlign: "left",
    marginStart: 10,
    paddingRight: 25,
    color: colors.colors.text,
  },
  containerIcons: {
    flexDirection: "column",
    marginTop: 10,
    padding: 15,
  },
  containerIcon1: {
    flexDirection: "row",
    paddingStart: 10,
  },
  dadosInicias: {
    backgroundColor: colors.colors.title,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -4,
  },
  borderIcon1: {
    textAlign: "center",
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
  textIcon1: {
    left: 10,
    color: colors.colors.button,
    fontWeight: "bold",
  },
  containerIcon2: {
    flexDirection: "row",
    marginTop: 20,
    paddingStart: 10,
  },
  tipoPerfil: {
    backgroundColor: colors.colors.select,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  borderIcon2: {
    textAlign: "center",
    color: colors.colors.fundo,
    backgroundColor: colors.colors.select,
    fontWeight: "bold",
  },
  textIcon2: {
    left: 10,
    color: colors.colors.select,
    fontWeight: "bold",
  },
  containerSelections: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  ajuste: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginRight: 30,
  },
  selection: {
    margin: 7,
    height: 65,
    width: "100%",
    backgroundColor: colors.colors.fundo,
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    justifyContent: "center",
  },
  iconSelection: {
    padding: 0,
    marginStart: 0,
    paddingStart: 0,
    marginRight: 10,
    fontSize: 20,
    color: "#cccccc",
  },
  textSelection: {
    textAlign: "justify",
    marginRight: 0,
    color: colors.colors.text,
  },
});

export default styles;
