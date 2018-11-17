import React from 'react';
import { Button, View, Keyboard, Text,StyleSheet,ScrollView,ImageBackground,
Image,TextInput,Alert ,Linking,TouchableOpacity,List,FlatList,TouchableHighlight,RefreshControl} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import { createStackNavigator,headerTitleStyle } from 'react-navigation';
import Notificationss from './Notificationss';

class DetailsScreen extends React.Component {
static navigationOptions = {
headerLeft: null,
headerTitle:  <Text style={{marginLeft:140,fontSize:25,fontWeight:'bold'}}>Login</Text>,
};
constructor(){

    super();
    global.username='username';
    global.password='password';

 }
state = {
    username: '',
    email:'',
  password: ''
 }
 handlename = (text) => {
    this.setState({ username: text })
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }


 login = (username, password,email) => {

    const {navigate} = this.props.navigation;
    navigate('Notification');

    fetch("http://18.221.128.124/api/rest-auth/login/", {
     method: "POST",
     headers: {
    'Accept': 'application/json',
     'Content-Type': 'application/json',

     },
     body: JSON.stringify({
    'username': this.state.username,
    'email':this.state.email,
    'password': this.state.password
     })
   })
   .then(response => response.json())
 .then(response => {
console.log(response);
navigate('Notification');
//console.log(response);
//navigate('Details');

})
}
    /*_userSignup() {

       // if validation fails, value will be null
          fetch("http://18.221.128.124/api/rest-auth/login/", {
            method: "POST",
            headers: {
           'Accept': 'application/json',
            'Content-Type': 'application/json',

            },
            body: JSON.stringify({
           username: 'this.state.username',
              email: 'this.state.UserEmail',
              password: 'this.state.UserPassword'
            })
          })
          .then((response) => response.json())
          .then((responseData) => {

            Alert.alert(
              "Signup Success!",

            )
          })


      }
*/
  render() {
    return (

      <ScrollView >

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <View style={{width: 330}}>


  <View style={styles.or} >
  <Text style={{  fontWeight: 'bold', fontSize: 30,color:'orange',alignItems: 'center'}} > {"\n"}{"\n"}</Text>
</View>



<TextInput style={styles.inputs}
  placeholder="juanperez"
underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
 onChangeText = {this.handlename}/>


 <TextInput style={styles.inputs}
   placeholder="juanperez"
 underlineColorAndroid='transparent'
   style={styles.TextInputStyleClass}
  onChangeText = {this.handleEmail}/>

<TextInput style={styles.inputs}
  placeholder="wh@tever"
  secureTextEntry={true}
underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
 onChangeText = {this.handlePassword}/>


  </View>
   <Button
     title="Login"

onPress = {
                  () => this.login(this.state.username, this.state.email,this.state.password)
               }
 //onPress={() => this.props.navigation.navigate('Notification')}
   />




     </View>
     </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    marginLeft:18,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
head: {
alignItems: 'center',
justifyContent: 'center',
color:'white',
fontWeight: 'bold',
fontSize: 30,
},
pics: {
justifyContent: 'center',
alignItems: 'center',
width: 320,
height: 180,
justifyContent: 'space-between'
},


});
export default DetailsScreen;
