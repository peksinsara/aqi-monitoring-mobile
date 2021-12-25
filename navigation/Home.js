import React from "react";
import { StyleSheet, View, Text } from "react-native";




const styles = StyleSheet.create({

    container: {
      height:"100%",
      backgroundColor:"#001440"
  
    },
   
  });

export default class Home extends React.Component{
 
render(){
return(
<View style={styles.container}>
<Text>
This is Home Screen
</Text>

 
</View>
)
}
 
}