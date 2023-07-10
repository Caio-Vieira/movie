import { StyleSheet } from "react-native";

const stylesDetails = StyleSheet.create({
  container: {
    backgroundColor: "#080808",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  Image: {
    opacity: 0.3,
    flex: 1.5,
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },

  cardDetails: {
    flex: 2,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  title: {
    color: "#fff",
    fontSize: 20,
  },

  titleSinopse: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    fontSize: 16,
    color: "#fff",
  },

  textOverview: {
    fontSize: 16,
    color: "#fff",
  },

  titleNota: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  releaseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  button: {
    position: "absolute",
    marginBottom: "155%",
    marginRight: "60%",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#0e1027",
    color: "#fff",
  },
  buttonback: {
    position: "absolute",
    marginRight: "72%",
    marginBottom: "128%",
    width: 80,
    height: 40,
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
export default stylesDetails;
