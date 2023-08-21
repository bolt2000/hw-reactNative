import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  ImageBackground,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

const RegistrationScreen = ({ changeScreen }) => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (text) => {
    setLogin(text);
  };
  const handleMail = (text) => {
    setMail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const register = () => {
    if (!login || !mail || !password) {
      alert("аповніть всі данні!");
      return;
    }
    console.log(`Login: ${login}, Email: ${mail}, Password: ${password}`);
  };

  const showPassword = () => alert(`Ваш пароль: ${password}`);

  return (
    <View style={styles.form}>
      {/* <StatusBar style="auto" /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerKeyboard}
      >
        <View style={styles.photoProfile}></View>
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.5}
          onPress={() => {
            takePhoto();
          }}
        >
          <Image style={styles.addBtn} source={require("../image/add.png")} />
        </TouchableOpacity>

        <Text style={styles.text}>Реєстрація</Text>

        <TextInput
          style={styles.inputForm}
          placeholder="Логін"
          inputMode="text"
          value={login}
          onChangeText={handleLogin}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Адрес електронної пошти"
          inputMode="email"
          value={mail}
          onChangeText={handleMail}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Пароль"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePassword}
        />

        <TouchableOpacity
          style={styles.passwordShow}
          activeOpacity={0.5}
          onPress={showPassword}
        >
          <Text style={styles.passwordShowText}>Показати</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.registerBtn}
        activeOpacity={0.5}
        onPress={register}
      >
        <Text style={styles.registerBtnText}>Зареєструватися</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLink}
        activeOpacity={0.5}
        onPress={() => changeScreen(0)}
      >
        <Text style={styles.loginLinkText}>Вже є аккаунт? Увійти</Text>
      </TouchableOpacity>

      {/* </View>
        </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // index: 1,
    // marginHorizontal: 0,
    // marginBottom: -50,
    // flex: 1,
    // height: "200%",
    // justifyContent: "center",
    // borderRadius: 16,
    width: "100%",
    height: "70%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  text: {
    color: "black",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  containerKeyboard: {
    justifyContent: "flex-end",
    alignItems: "center",
  },

  addBtn: {
    left: "7%",
    top: -20,
  },

  // addBtnImage: {
  //   // width: "100%",
  //   // height: "100%",
  // },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
    textAlign: "center",
  },

  inputForm: {
    fontWeight: "400",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    fontSize: 16,
    width: 343,
    height: 50,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    fontStyle: "normal",
    lineHeight: 19,
    marginBottom: 10,
    position: "relative",
  },

  //   inputForm:active: {
  //   fontStyle: "normal",
  // },

  inputLogin: {
    backgroundColor: "black",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShow: {
    top: -45,
    left: 120,
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  registerBtnText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontWeight: "bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  photoProfile: {
    backgroundColor: "#F6F6F6",
    marginTop: -60,
    // width: "10",
    // height: "100%",
    // overflow: "hidden",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    height: 120,
    width: 120,
    // borderRadius: 6,
    // overflow: "hidden",
    justifyContent: "center",
    borderRadius: 16,
  },
});

export default RegistrationScreen;
