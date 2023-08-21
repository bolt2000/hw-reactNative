import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const LoginScreen = ({changeScreen}) => {

   const [mail, setMail] =useState('');
   const [password, setPassword] =useState('');

   const handleMail =(text)=>{ setMail(text)};
   const handlePassword =(text)=>{ setPassword(text)};

   const register =()=> {
    if (!mail || !password) { alert("Заповніть всі данні!"); return }
    console.log(`Email: ${ mail }, Password: ${password}`)
   }

    const showPassword = () => alert(`Ваш пароль: ${password}`);
    
  return (
    <View style={styles.form}>
      <View>
        <KeyboardAvoidingView
          style={styles.cont}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.text}>Увійти</Text>
          <TextInput
            value={mail}
            onChangeText={handleMail}
            placeholder="Адреса електронної пошти"
            style={styles.input}
          
          />
          <TextInput
            value={password}
            onChangeText={handlePassword}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
            
          />
          <TouchableOpacity style={styles.inputText} onPress={showPassword}>
            <Text style={{ color: "#1B4371" }}>Показати</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity
        onPress={register}
        activeOpacity={0.7}
        style={styles.loginBtn}
      >
        <Text style={{ color: "white" }}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnText}
        activeOpacity={0.5}
        onPress={() => changeScreen(1)}
      >
        <Text style={{ color: "#1B4371"}}>
          Немає акаунту? 
          <Text style={{ textDecorationLine: "underline" }}>
            Зареєструватися
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
        marginBottom: 15,
    
  },

  input: {
    width: 343,
    height: 50,
    padding: 10,
    marginBottom: 16,
    borderRadius: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  inputText: {
    top: -50,
    left: 120,
  },
 
  btnText: {},
  form: {
    width: "100%",
    // top: -120,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: "60%",
  },
  text: {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
    fontWeight: "bold",
  },
  cont: {
    alignItems: "center",
  },
});


export default LoginScreen;