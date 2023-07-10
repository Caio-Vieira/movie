import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ButtonFamily = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Familia</Text>
    </TouchableOpacity>
  );
};

export const ButtonPopular = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Popular</Text>
    </TouchableOpacity>
  );
};

export const ButtonWar = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Guerra</Text>
    </TouchableOpacity>
  );
};

export const ButtonWestern = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Faroeste</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonsView: {
    width: 70,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
  },
});
