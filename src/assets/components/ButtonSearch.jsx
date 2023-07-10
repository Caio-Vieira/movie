import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonSearch({ screenName }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.ButtonSearch}
        title={`${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      >
        <LinearGradient
          colors={["#4b6cb7", "#182848"]}
          style={styles.background}
        >
          <MaterialIcons
            style={styles.iconSearch}
            name="search"
            size={24}
            color="#fff"
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonSearch: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    borderRadius: "50%",
    width: 60,
    height: 60,
  },
  iconSearch: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
