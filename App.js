import React from 'react';
import Home from './navigation/Home';
import Details from'./navigation/Details';
import Maps from'./navigation/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const sampleTabNavigation = createBottomTabNavigator(
);
 
export default class App extends React.Component {
render() {
 
return (
 
<NavigationContainer>
<sampleTabNavigation.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
 
if (route.name === 'Home') {
iconName = 'md-home';
} else if (route.name === 'Details') {
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
<sampleTabNavigation.Screen name="Details" component={Details} />

</sampleTabNavigation.Navigator>
</NavigationContainer>
);
}
}