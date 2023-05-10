import { StyleSheet } from "react-native";
import constants from "expo-constants";

const styles = StyleSheet.create({
  contador: {
    fontSize: constants.platform.ios ? 25 : 40,
    fontWeight: 600,
    marginBottom: 50
  }
})

export default styles