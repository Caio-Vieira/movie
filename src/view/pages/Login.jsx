import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../assets/auth/auth";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import stylesLogin from "../../assets/styles/stylesLogin";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        navigation.navigate("Popular");
        clearInputs();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email.":
            Alert.alert("Email inválido");
            break;
          case "auth/user-not-found.":
            Alert.alert("Usuario não encontrado");
            break;
          case "auth/wrong-password.":
            Alert.alert("Senha incorreta");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={stylesLogin.container}>
      <Text style={stylesLogin.text}>Login</Text>
      <TextInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        style={stylesLogin.input}
        placeholderTextColor={"white"}
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Senha"
        style={stylesLogin.input}
        placeholderTextColor={"white"}
      />
      <TouchableOpacity onPress={() => login()} style={stylesLogin.button}>
        <Text style={stylesLogin.textLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={stylesLogin.textRegister}
          onPress={() => {
            navigation.navigate("Register");
            clearInputs();
          }}
        >
          Não possue cadastro? Clique aqui!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
