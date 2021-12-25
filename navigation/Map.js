import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const styles = StyleSheet.create({
  white:{
    color:"#fff"
  },
  AQI:{
    color:"#AC4FC6"
  },
  container: {
    flex: 1,
    backgroundColor:"#001440"

  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  list: {
    paddingVertical: 2,
    padding:20,
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor: "#050a30",
    color:"white",
    borderRadius: 15,
  },
});

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.waqi.info/map/bounds/?latlng=89.45016124669523,180,-87.71179927260242,-180&token=2ec4dd778796b645fcba62b587874b25e477acd9"
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          dataSource: responseData.data,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }


  FlatListItemSeparator = () => {
    return (
    <View style={{
    height: .5,
    width:"100%",
    }}
    />
    );
    } 

  renderItem = (data) => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.white}>Station : {data.item.station.name}</Text>
      <Text style={styles.white}>Lat : {data.item.lat}</Text>
      <Text style={styles.white}>Long : {data.item.lon}</Text>
      <Text style={styles.AQI}>AQI : {data.item.aqi}</Text>
    </TouchableOpacity>
  );
  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.uid.toString()}
        />
      </View>
    );
  }
}
