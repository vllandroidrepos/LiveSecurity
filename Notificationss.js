import React from 'react';
import { Button, View, Keyboard, Text,StyleSheet,ScrollView,ImageBackground,
Image,TextInput,Alert ,Linking,TouchableOpacity,List,FlatList,TouchableHighlight,RefreshControl} from 'react-native';
import {Constants, Notifications, Permissions} from 'expo';
import { createStackNavigator } from 'react-navigation';


class Notificationss extends React.Component {

static navigationOptions = {
headerTitle:  <Text style={{marginLeft:100,fontWeight:'bold',fontSize:25}}>Notifications</Text>,
headerLeft: null,

//headerStyle: {backgroundColor:'#3c3c3c'},

  };



  onSubmit(e) {
  Keyboard.dismiss();
  const localNotification = {
              title: 'Camera Device Notification sent succesfully',
              body: 'Notification Sent Successfully'
          };
  Notifications.scheduleLocalNotificationAsync(
              localNotification
          );

      }

      handleNotification() {
        <Text>Send notification!</Text>
      }

      async componentDidMount() {

          let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

          if (Constants.isDevice && result.status === 'granted') {

          }


          Notifications.addListener(this.handleNotification);
      }
  constructor()
  {
    super();
    global.username=username;
    global.password=password;

    this.state = {

    isLoading: true,

    ModalVisibleStatus: false,

    TempImageURL : '',
    refreshing: false



   }
  }

  componentDidMount() {

         return fetch('http://18.221.128.124/api/imgnotif/last/',{
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Token c6ab89156cc6d712076bb82ea9209e0c52b2124e'


            }
         })

           .then((response) => response.json())
           .then((responseJson) => {
             console.log(responseJson)
             this.setState({
               isLoading: false,
               dataSource: responseJson
             }, function() {

             });
           })
           .catch((error) => {
             console.error(error);
           });
       }

  ShowModalFunction(visible, imageURL)
  {
    this.setState({
    ModalVisibleStatus: visible,
    TempImageURL : imageURL});
  }
   render() {

      if (this.state.isLoading) {

          return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:40 }}>
            </View>

        );

      }

    return (
<View style={{ flex: 1, alignItems: 'center' }}>

<Image source={require('./pics/profile.png')}   style={{ height:100,width:100}} />

<TouchableHighlight onPress={() => this.onSubmit()} >

         <Image source={require('./pics/notifi.png')}
         style={{ height:50,width:50,marginLeft:230,marginTop:0}} />

</TouchableHighlight>



<Text>{"\n"}</Text>
  <Text style={{textAlign: 'left'}}>User:{global.username}</Text>
<FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) =>index.toString()}
          renderItem = {({item})=>
          <View >

              <Text style={{textAlign: 'left'}}>Camera-Id:          {item.camera_id}</Text>
              <Text style={{textAlign: 'left'}}>Date-Time:         {item.date_time}</Text>
              <Text style={{textAlign: 'left'}}>Object-Name:    {item.object_name}</Text>
              <Text style={{textAlign: 'left'}}>Image-Name:    {item.image_name}{"\n"}{"\n"}{"\n"}</Text>
          </View>

          }
          refreshControl={
                      <RefreshControl
                       refreshing={this.state.refreshing}

                      />
                    }
          />
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} >
                   <View>
                   <Image source={require('./pics/Logout.png')}   style={{ height:50,width:50,}} />
                   </View>
         </TouchableHighlight>
 </View>

    );
  }
}
export default Notificationss;
