import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEnter: {
    textAlign: "center",
    fontSize: 25,
    position: "fixed",
    bottom: "50%",
    width: 260,
    height: 45,
    color: "#d2d1d1",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d2d1d1",
  },
  buttonRegister: {
    textAlign: "center",
    fontSize: 25,
    position: "fixed",
    bottom: "40%",
    width: 260,
    height: 45,
    color: "#d2d1d1",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d2d1d1",
  },
  card: {
    opacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  image: {
    width: "100%",
    height: "100vh",
    flex: 1.5,
  },
  textHome: {
    position: "fixed",
    bottom: "57%",
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    fontStyle: "Oblique",
  },
});
export default stylesHome;
