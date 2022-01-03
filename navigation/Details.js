import React, { useState } from "react";

import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function Details(props) {
  const styles = StyleSheet.create({
    white: {
      color: "#fff",
      fontSize: 18,
      flex: 0.8,
      marginLeft: 10,
      lineHeight: 30,
      display: "flex",
      width: 220,
      paddingTop: 12,
      textAlignVertical: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#343434",
      paddingLeft: 10,
      paddingRight: 10,
      height: "100%",
    },
    list: {
      paddingVertical: 5,
      display: "flex",
      height: 120,
      flexDirection: "row",
      padding: 20,
      fontSize: 16,
      lineHeight: 30,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 5,
      backgroundColor: "#161616",
      color: "white",
      borderRadius: 15,
    },
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    modalText: {
      textAlign: "center",
      fontSize: 20,
    },
    modalButton: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#62DDEF",
      borderRadius: 20,
      height: 40,
      borderColor: "black",
      flex: 1,
    },
    wrap: {
      padding: 20,
      margin: 20,
      borderRadius: 20,
      backgroundColor: "black",
      shadowColor: "pink",
      shadowOffset: {
        width: 20.4,
        height: 50.4,
      },
      shadowOpacity: 0.74,
      shadowRadius: 30,
      elevation: 10,
    },
    text: {
      fontSize: 20,
      color: "#62DDEF",
      paddingTop: 5,
      textAlignVertical: "center",
      marginLeft: 120,
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    mainButton: {
      width: 100,
      height: 50,
      borderRadius: 20,
      backgroundColor: "green",
    },
    img: {
      display: "flex",
      marginTop: 15,
    },
    content:{
      color:"white"
    },
    btn:{
      fontSize: 20,
      color: "black",
      paddingTop: 5,
      textAlignVertical: "center",
      marginLeft: 120,
    }
  });

  const [animation, setAnimation] = useState(new Animated.Value(0));

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.0)",
    ],
  });

  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.1],
    extrapolate: "clamp",
  });


  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const open = {
    transform: [{ scale: openModal }, ],
  };
  const background = {
    backgroundColor: color,
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Image source={image2} style={styles.img} />
        <View>
          <Text style={styles.white}>10 Ways To Reduce Air Pollution</Text>
          <TouchableOpacity
            style={(styles.mainButton, styles.center)}
            onPress={modalTrigger}
          >
            <Text style={styles.text}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>

      

      <View style={styles.list}>
        <Image source={image2} style={styles.img} />
        <View>
          <Text style={styles.white}>10 Ways To Reduce Air Pollution</Text>
          <TouchableOpacity
            style={(styles.mainButton, styles.center)}
            onPress={modalTrigger}
          >
            <Text style={styles.text}>Read</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={(styles.background, background)}>
        <Animated.View style={(styles.background, open)}>
          <View style={styles.wrap}>
            <Text style={styles.content}>1. Using public transports</Text>
            <Text style={styles.content}>2. Turn off the lights when not in use</Text>
            <Text style={styles.content}>3. Recycle and Reuse</Text>
            <Text style={styles.content}>4. No to plastic bags</Text>
            <Text style={styles.content}>5. Reduction of forest fires and smoking</Text>
            <Text style={styles.content}>6. Use of fans instead of Air Conditioner</Text>
            <Text style={styles.content}>7. Use filters for chimneys</Text>
            <Text style={styles.content}>8. Avoid usage of crackers</Text>
            <Text style={styles.content}>8. Avoid using of products with chemicals</Text>
            <Text style={styles.content}>9. Implement Afforestation</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={close} style={styles.modalButton}>
                <Text style={styles.btn}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>

      <Animated.View style={(styles.background, background)}>
        <Animated.View style={(styles.background, open)}>
          <View style={styles.wrap}>
            <Text style={styles.content}>1. Using public transports</Text>
            <Text style={styles.content}>2. Turn off the lights when not in use</Text>
            <Text style={styles.content}>3. Recycle and Reuse</Text>
            <Text style={styles.content}>4. No to plastic bags</Text>
            <Text style={styles.content}>5. Reduction of forest fires and smoking</Text>
            <Text style={styles.content}>6. Use of fans instead of Air Conditioner</Text>
            <Text style={styles.content}>7. Use filters for chimneys</Text>
            <Text style={styles.content}>8. Avoid usage of crackers</Text>
            <Text style={styles.content}>8. Avoid using of products with chemicals</Text>
            <Text style={styles.content}>9. Implement Afforestation</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={close} style={styles.modalButton}>
                <Text style={styles.btn}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Animated.View>

    </View>
  );
}
