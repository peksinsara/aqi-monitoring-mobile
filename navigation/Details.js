import React from "react";
import {

  View,
  Text,
  StyleSheet, Image, Button
} from "react-native";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const styles = StyleSheet.create({
  white: {
    color: "#fff",
    fontSize:18,
    flex: 1,
    marginLeft:10,
    lineHeight:30,
    display:"flex",
    textAlignVertical:"center",

    
  },
  container: {
    flex: 1,
    backgroundColor: "#343434",
    paddingLeft:10,
    paddingRight:10,
  },
  list: {
    paddingVertical: 5,
    display:"flex",
    height:120,
    flexDirection:"row",
    padding: 20,
    fontSize:16,
    lineHeight:30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#161616",
    color: "white",
    borderRadius: 15,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
  },
  img:{
    margin:"auto",
  }
});



export default class DetailsScreen extends React.Component {
  
  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Image source={image2} style={styles.img}/>
          <Text style={styles.white}>10 Ways To Reduce Air Pollution</Text>
          <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DetailsScreen')}
                />
        </View>

        <View style={styles.list}>
          <Image source={image3} style={styles.img}/>
          <Text style={styles.white}>How To  Protect Yourself From Unhealthy Air</Text>
        </View>
        <View style={styles.list}>
          <Image source={image4} style={styles.img}/>
          <Text style={styles.white}>Actions to Protect Health</Text>

        </View>
       
      </View>
    );
  }
}
