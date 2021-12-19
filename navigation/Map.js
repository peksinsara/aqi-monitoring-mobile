import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE,Marker } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default class MapScreen extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      markers: [{
        title: 'Sarajevo',
        coordinates: {
          latitude: 43.86666667,
          longitude:  18.416667,
          latitudeDelta: 0.0335,
            longitudeDelta: 0.04250
        },
      },
      {
        title: 'Vienna',
        coordinates: {
          latitude: 44.20169,
          longitude: 17.90397,
          latitudeDelta: 0.0335,
            longitudeDelta: 0.04250
        },  
      }]
    };
  }
 
render(){
return(
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Map Screen
      </Text>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 43.86666667,
          longitude:  18.416667,
          latitudeDelta: 0.0835,
            longitudeDelta: 0.09250
          }}
        >
           {this.state.markers.map((marker, index) => ( 
              <Marker key={index} coordinate={marker.coordinates} title={marker.title} 
               /> ))}	
        </MapView>
      </View>
    </View>
)
}
 
}