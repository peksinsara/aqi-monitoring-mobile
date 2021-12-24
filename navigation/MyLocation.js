import React, { Component} from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { PERMISSIONS, request } from "react-native-permissions";
import * as Geolocation from "@react-native-community/geolocation";



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  
  
export default class MyLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {

      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  componentDidMount(){

    try {
        request(
            Platform.select({
              android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            })
          ).then(res => {
            if (res == "granted") {
                
                    Geolocation.getCurrentPosition(
                      (position) => {
                        this.setState({
                          latitude: position.coords.latitude,
                          longitude: position.coords.longitude,
                          coordinates: this.state.coordinates.concat({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                          }),
                        });
                      },
                      (error) => {
                        Alert.alert(error.message.toString());
                      },
                      {
                        showLocationDialog: true,
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 0,
                      }
                    );
                  
            } else {
                Alert.alert(error.message.toString());
            }
          });
        } catch (error) {
          console.log("location set error:", error);
        }
  }
  


  

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={styles.container}>

          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          >
          </Marker>
        </MapView>

          </View>
        
      </View>
    );
  }
}
