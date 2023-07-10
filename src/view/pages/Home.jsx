import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import stylesHome from "../../assets/styles/stylesHome";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={stylesHome.container}>
      <View>
        <View style={stylesHome.card}>
          <ImageBackground
            style={stylesHome.image}
            source={{
              uri: `https://www.themoviedb.org/t/p/original/wF8LNx3YymMhkHRE73wtJKuX4ii.jpg`,
            }}
          ></ImageBackground>
        </View>
      </View>

      <TouchableOpacity
        style={[
          stylesHome.containerButton,
          { zIndex: 1, position: "absolute" },
        ]}
      >
        <Text
          onPress={() => navigation.navigate("Login")}
          style={stylesHome.buttonEnter}
        >
          Entrar
        </Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={stylesHome.buttonRegister}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
      <Text style={[stylesHome.textHome, { zIndex: 2, position: "fixed" }]}>
        Movies
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
