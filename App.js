import React from 'react';
import { Button, View, Keyboard, Text,StyleSheet,ScrollView,ImageBackground,
Image,TextInput,Alert ,Linking,TouchableOpacity,List,FlatList,TouchableHighlight,RefreshControl} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Notificationss from './Notificationss';


export default class App extends React.Component {

  render() {
   return <RootStack />;
 }

}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Notification:Notificationss,



  },
  {
    initialRouteName: 'Home',




  }
);
