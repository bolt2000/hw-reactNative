import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import photo from "./image/photo.jpg";

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreenFunc = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground style={styles.photo} source={photo}>
          {activeScreen === 0 ? (
            <LoginScreen changeScreen={changeScreenFunc} />
          ) : (
            <RegistrationScreen changeScreen={changeScreenFunc} />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  photo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
