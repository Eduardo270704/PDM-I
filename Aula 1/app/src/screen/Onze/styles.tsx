import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
  },

  subContainer: {
    borderWidth: 1,
    width: 270,
    padding: 20,
    borderRadius: 4,
    borderColor: "#cbcbcb",
    alignItems: "center",
  },

  title: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  fatec: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },
});

export default styles;
