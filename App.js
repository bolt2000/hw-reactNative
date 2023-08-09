import { StatusBar } from 'expo-status-bar';
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
  Image
} from "react-native";
import photo from "./image/photo.jpg";
import avatar from "./image/avatar.png";

// const image = { uri: ".././image/photo.jpg" };

export default function App() {



  const showPassword = () => alert(`Your password is: ${password}.`);

  return (
    <View style={styles.container}>
      {/* <Text>Це макет !!!</Text> */}
      <StatusBar style="auto" />
      <ImageBackground source={photo} style={styles.photo} resizeMode="cover">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? 50 : 100}
          style={styles.containerKeyboard}
        >
          <View style={styles.container2}>
            <View style={styles.containerAvatar}>
              <Image source={avatar} style={styles.photoProf} />
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              activeOpacity={0.5}
              onPress={() => {
                takePhoto();
              }}
            >
              {/* <AntDesign name="" size={24} color="red" /> */}
            </TouchableOpacity>

            <Text style={styles.text}>Реєстрація</Text>

            <TextInput
              style={styles.inputForm}
              placeholder="Логін"
              // value={login}
              // onChangeText={handleLogin}
            />
            <TextInput
              style={styles.inputForm}
              placeholder="Адрес електронної пошти"
              // value={email}
              // onChangeText={handleEmail}
            />
            <TextInput
              style={styles.inputForm}
              placeholder="Пароль"
              secureTextEntry={true}
              // value={password}
              // onChangeText={handlePassword}
            />

            <TouchableOpacity
              style={styles.passwordShow}
              activeOpacity={0.5}
              onPress={showPassword}
            >
              <Text style={styles.passwordShowText}>Показати</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerBtn}
              activeOpacity={0.5}
              // onPress={user}
            >
              <Text style={styles.registerBtnText}>Зареєструватись</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginLinkText}>Вже є аккаунт? Ввійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  photo: {
    flex: 1,
    justifyContent: "center",
    width: null,
    height: null,
  },
  text: {
    color: "black",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },

  containerKeyboard: {
    justifyContent: "flex-end",
  },

  containerAvatar: {
    marginTop: 180,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    height: 120,
    width: 120,
    backgroundColor: "black",
    borderRadius: 16,
    overflow: "hidden",
  },
  addBtn: {
    position: "absolute",
    left: "62%",
    top: 10,
    pointerEvents: "auto",
  },
  addBtnImage: {
    width: "100%",
    height: "100%",
  },
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

  inputLogin: {
    // backgroundColor: "#F6F6F6",
    // width: 343,
    // height: 50,
    // borderRadius: 8,
    // marginTop: 33,
    // padding: 16,
    // fontStyle: "normal",
    // fontWeight: "400",
    // fontSize: 16,
    // lineHeight: 19,
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  input: {
    // backgroundColor: "#F6F6F6",
    // width: 343,
    // height: 50,
    // borderRadius: 8,
    // padding: 16,
    // marginTop: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    // fontStyle: "normal",
    // fontWeight: "400",
    // fontSize: 16,
    // position: "relative",
  },
  passwordShow: {
    top: -45,
    left: 290,
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    // lineHeight: 19,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
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
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  photoProf: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    // alignSelf: "center",
  },
});
