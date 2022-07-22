import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colors.background,
  },
  input: {
    margin: 20,
    marginTop: 20,
    borderRadius: 10,
    height: 200,
    backgroundColor: colors.colors.fundo,
    justifyContent: "center",
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  containerText: {
    flexDirection: "column",
    paddingStart: 20,
    paddingEnd: 100,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify",
  },
  txtDescription: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "left",
  },
});

export default styles;
