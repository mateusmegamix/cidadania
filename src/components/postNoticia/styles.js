import { StyleSheet } from "react-native";
import colors from "../../components/commonStyles/colors";

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 40,
    borderRadius: 20,
    margin: 5
  },
  image: {
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  category: {
    marginTop: 20,
    paddingStart: 20,
    fontSize: 16,
    color: colors.colors.button,
  },
  txtTitle: {
    marginTop: 10,
    marginRight: 20,
    paddingStart: 20,
    fontSize: 14,
    textAlign: "left",
    fontWeight: "bold",
  },
  txtDescription: {
    marginTop: 20,
    marginRight: 20,
    paddingStart: 20,
    textAlign: "left",
    color: colors.colors.text,
  },
  txtTime: {
    marginTop: 20,
    paddingStart: 20,
    textAlign: "left",
  },
});

export default styles;
