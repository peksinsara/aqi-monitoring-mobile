import React from 'react';
import Home from './navigation/Home';
import MyLocation from'./navigation/MyLocation';
import Maps from'./navigation/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const sampleTabNavigation = createBottomTabNavigator(
);


 
export default class App extends React.Component {
render() {
 
return (
 
<NavigationContainer style={{backgroundColor:"#001440"}}>
<sampleTabNavigation.Navigator style={{backgroundColor:"#001440"}}
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
 
if (route.name === 'Home') {
iconName = 'md-home';
} else if (route.name === 'MyLocation') {
iconName = 'md-home';
}
else if (route.name === 'Maps') {
  iconName = 'md-home';
  }
 
return <Ionicons name = {iconName} size={size} color={color} />;
},
})}

>
<sampleTabNavigation.Screen name="Home" component={Home} />
<sampleTabNavigation.Screen name="Maps" component={Maps} />
<sampleTabNavigation.Screen name="MyLocation" component={MyLocation} />

</sampleTabNavigation.Navigator>
</NavigationContainer>
);
}
}