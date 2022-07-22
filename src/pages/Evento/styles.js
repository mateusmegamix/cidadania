import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  containerDescription: {
    backgroundColor: colors.colors.fundo,
    marginTop: -35,
    padding: 20,
    borderRadius: 30,
  },
  input: {
    flexDirection: "column",
    marginTop: 15,
  },
  txtTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingStart: 4,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
  },
  txtEvent: {
    color: colors.colors.shadow,
    fontSize: 14,
    textAlign: "left",
  },
  btnFacebook: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "transparent",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.colors.button,
  },
  txtBtn: {
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.colors.buttonF,
  },
  txtDescription: {
    marginTop: 15,
    textAlign: "justify",
    color: colors.colors.text,
  },
});

export default styles;
