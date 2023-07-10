import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from "../../assets/auth/auth";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import stylesRegister from "../../assets/styles/stylesRegister";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        Alert.alert("Usuario criado com sucesso!");
        navigation.navigate("Login");
        clearInputs();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email.":
            Alert.alert("Email inválido");
            break;
          case "auth/email-already-in-use.":
            Alert.alert("Email já cadastrado");
            break;
          case "Firebase:Password should be at least 6 characters(auth/weak-password).":
            Alert.alert("A senha deve conter 6 caracteres");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={stylesRegister.container}>
      <Text style={stylesRegister.text}>Cadastrar</Text>
      <TextInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        style={stylesRegister.input}
        placeholderTextColor={"white"}
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Senha"
        style={stylesRegister.input}
        placeholderTextColor={"white"}
      />
      <TouchableOpacity
        style={stylesRegister.button}
        onPress={() => register()}
      >
        <Text style={stylesRegister.textRegister}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={stylesRegister.textLogin}
          onPress={() => {
            navigation.navigate("Login");
            clearInputs();
          }}
        >
          Possue cadastro? Clique aqui e faça seu login!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Register;
