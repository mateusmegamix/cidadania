import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  input: {
    margin: 20,
    marginTop: 0,
    backgroundColor: colors.colors.fundo,
    borderRadius: 10,
    height: 120,
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
    color: colors.colors.button,
  },
  txtDescription: {
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  icon: {
    color: colors.colors.button,
  },
});

export default styles;
