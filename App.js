import React from 'react';
import Home from './navigation/Home';
import MyLocation from'./navigation/MyLocation';
import Details from'./navigation/Details';
import Welcome from'./navigation/Welcome';
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
   tabBarOptions={{
    activeTintColor: '#62DDEF',
    inactiveTintColor: '#62DDEF',
    activeBackgroundColor: '#212121',
    inactiveBackgroundColor: '#282828',
        style: {
              backgroundColor: '#CE4418',
              paddingBottom: 3,
              margin:0
        }
 }}
screenOptions={({ route }) => ({
  
tabBarIcon: ({ focused, color, size }) => {
let iconName;
 
if (route.name === 'Welcome') {
iconName = 'md-home';

} else if (route.name === 'Home') {
iconName = 'md-home';
}
else if (route.name === 'MyLocation') {
  iconName = 'md-map-outline';
  }
  else if (route.name === 'Details') {
    iconName = 'list-outline';
    }
 
return <Ionicons name = {iconName} size={size} color={color} />;
},
})}

>
<sampleTabNavigation.Screen name="Welcome" component={Welcome} />
<sampleTabNavigation.Screen name="Home" component={Home} />
<sampleTabNavigation.Screen name="MyLocation" component={MyLocation} />
<sampleTabNavigation.Screen name="Details" component={Details} />


</sampleTabNavigation.Navigator>
</NavigationContainer>
);
}
}