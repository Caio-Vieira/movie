import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 30,
    color: "#d2d1d1",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d2d1d1",
    color: "#d2d1d1",
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d2d1d1",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    marginVertical: 12,
  },
  textRegister: {
    fontStyle: "oblique",
    fontSize: 16,
    marginTop: 10,
    color: "#55a3d887",
  },
  textLogin: {
    color: "#fff",
  },
});
export default stylesLogin;
