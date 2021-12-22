import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class MapScreen extends React.Component {
  state = {
    aqi: " ",
    location: "",
    lat: 0,
    long: 0,
  };
  /*https://api.waqi.info/feed/sarajevo/?token=2ec4dd778796b645fcba62b587874b25e477acd9*/
  componentDidMount() {
    const location = "sarajevo";
    const token = "2ec4dd778796b645fcba62b587874b25e477acd9";
    fetch(`https://api.waqi.info/feed/${location}/?token=${token}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        this.setState({
          location: fetchedData.data.city.name,
          aqi: String(fetchedData.data.aqi),
          lat: fetchedData.data.city.geo[0],
          long: fetchedData.data.city.geo[1],
        });
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 26, fontWeight: "bold" }}
        ></Text>

        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 43.86666667,
              longitude: 18.416667,
              latitudeDelta: 0.0835,
              longitudeDelta: 2.3,
            }}
          >
            <Marker
              key={Math.random()}
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }}
              title={this.state.location}
              description={this.state.aqi}
            ></Marker>
          </MapView>


        </View>
      </View>
    );
  }
}
