import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const ButtonTrailer = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonTrailer}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Feather name="chevrons-left" size={24} color="#fff" />
      <Text style={styles.textTrailer}>Voltar</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonTrailer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    height: 45,
  },
  textTrailer: {
    textAlign: "center",
    color: "#fff",
  },
});
