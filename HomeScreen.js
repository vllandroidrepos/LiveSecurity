import React from 'react';
import { Button, View, Keyboard, Text,StyleSheet,ScrollView,ImageBackground,
Image,TextInput,Alert ,Linking,TouchableOpacity,List,FlatList,TouchableHighlight,RefreshControl} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';
import Notificationss from './Notificationss';
class HomeScreen extends React.Component {
  static navigationOptions = {

  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:80}}>
        <Text style={{  fontWeight: 'bold', fontSize: 30,color:'orange'}}>Welcome Here {"\n"} {"\n"} {"\n"} {"\n"}</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
                 <View style={{ justifyContent: 'flex-end',marginTop:40}}>
                 <Image source={require('./pics/login.jpg')}   style={{ height:100,width:150,}} />
                 </View>
        </TouchableHighlight>


      </View>
    );
  }
}


export default HomeScreen;
