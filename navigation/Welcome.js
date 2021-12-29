import Home from "./Home";
import React from "react";
import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import Logo from "../assets/AQI-logo.png";


export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO</Text>
        <Image source={Logo} style={styles.logo} />

        <Text style={styles.textColor}>Pollution Alert</Text>
        <Pressable style={styles.button}>
         
      <Text style={styles.textButton}>NEXT</Text>
      </Pressable>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282828",
    height: "100%",
    display:"flex",
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  text:{
    color: "white", 
    fontSize: 26, 
    alignContent: "center",
    marginBottom:"10%",
  },
  textColor:{
fontSize:40,
color:"#62DDEF",
  },
  logo:{
    width:120,
    height:180,
  },
  button:{
    width:150,
    height:50,
    backgroundColor:"#282828",
    borderWidth:2,
    borderRadius:  12,
borderColor: "black",
    marginTop:"30%",
  },
  textButton:{
    color: "#62DDEF",
    fontSize:20,
    textAlign: "center", 
    justifyContent: "center",
paddingTop:10,
    alignItems: "center",
    fontWeight:"bold",
  }
});
