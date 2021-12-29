import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  white: {
    color: "#fff",
  },
  AQI: {
    color: "#AC4FC6",
    backgroundColor:"red",
    marginLeft:"7%",
    width:"30%",
    marginTop:10,
    borderRadius:12,
    height:80,

  },
  AQItext:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
paddingTop:30,
    textAlign: "center", 
  },
  container: {
    flex: 1,
    backgroundColor: "#343434",
    paddingLeft:10,
    paddingRight:10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
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
  },
  textList:{
    paddingTop:10,
    width:"60%",
    display:"flex",
    flexDirection:"column",
  }
});

export default class HomeScreen extends React.Component {
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
      <View
        style={{
          height: 0.5,
          width: "100%",
        }}
      />
    );
  };

  renderItem = (data) => (
    <TouchableOpacity style={styles.list}>
      <View style={styles.textList}>     
       <Text style={styles.white}>Station : {data.item.station.name}</Text>
      <Text style={styles.white}>Lat : {data.item.lat}</Text>
      <Text style={styles.white}>Long : {data.item.lon}</Text>
      </View>

      <View  style={styles.AQI}><Text style={styles.AQItext}>{data.item.aqi}</Text></View>
      
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
        <FlatList style={styles.flatlist}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.uid.toString()}
        />
      </View>
    );
  }
}
