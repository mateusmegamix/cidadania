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
    marginTop: 70,
    textAlign: "center",
  },
  textSub: {
    textAlign: "center",
    marginTop: 10,
    color: colors.colors.text,
    paddingLeft: 25,
    paddingRight: 25,
  },
  input: {
    marginTop: 40,
    height: 40,
    paddingLeft: 20,
    margin: 25,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: colors.colors.fundo,
  },
  buttonEnviar: {
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.colors.button,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: colors.colors.fundo,
    fontWeight: "bold",
  },
});

export default styles;
