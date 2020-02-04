import { AsyncStorage , Alert} from 'react-native';
import firebase from 'react-native-firebase';
import AccountScreen from './src/Screens/AccountScreen';
import React ,{Component} from 'react'
import OrderScreen from './src/Screens/OrderScreen';
import AddressScreen from './src/Screens/AddressScreen';
import SubscriptionScreen from './src/Screens/SubscriptionScreen';
import DetailScreen from './src/Screens/DetailScreen';
import PaymentScreen from './src/Screens/PaymentScreen';
import HelpScreen from './src/Screens/HelpScreen';
import HelpDetail from './src/Screens/HelpDetail';
import MapScreen from './src/Screens/MapScreen';
import EditScreen from './src/Screens/EditScreen';
import TempScreen from './src/Screens/tempScreen';
import Home from './src/Screens/home';
import Login from './src/Screens/Login';
import Product from './src/Screens/Product';
import Schedule from './src/Screens/Schedule';
import PaytmGateway from './src/Screens/PaytmGateway';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
  Temp:TempScreen,
  Map : MapScreen,
  Edit: EditScreen,
  Account: AccountScreen,
  Order : OrderScreen,
  Address: AddressScreen,
  Subscription:SubscriptionScreen,
  Detail: DetailScreen,
  Payment: PaymentScreen,
  Help:HelpScreen,
  HelpDetail:HelpDetail,
  Home:Home,
  Login:Login,
  Product:Product,
  Schedule:Schedule,
  Paytm:PaytmGateway,
  },
{
  initialRouteName: 'Account',
  defaultNavigationOptions: {
    headerShown:false,
  },
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  
  
  
  async componentDidMount() {
    /* Checking for permissions and creating Notification Listeners */
    this.checkPermission();
    this.createNotificationListeners();
    this.createNotificationChannels();
  }
  //Remove listeners allocated in createNotificationListeners()

componentWillUnmount() {
  /* Deleting Listeners when component is Unmounted*/
  this.notificationListener();
  this.notificationOpenedListener();

}
async createNotificationChannels()
{
  // Build a channel
 const channel = new firebase.notifications.Android.Channel('main', 'MAIN-CHANNEL', firebase.notifications.Android.Importance.Max)
       .setDescription('My apps test channel');
// Create the channel
firebase.notifications().android.createChannel(channel);
}

async createNotificationListeners() {
  /*

  * Triggered when a particular notification has been received in foreground

  * */
  this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.showAlert(title, body);

  });

  /*

  * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:

  * */

  this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {

      const { title, body } = notificationOpen.notification;

      this.showAlert(title, body);

  });



  /*

  * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:

  * */

  const notificationOpen = await firebase.notifications().getInitialNotification();

  if (notificationOpen) {

      const { title, body } = notificationOpen.notification;

      this.showAlert(title, body);

  }

  /*

  * Triggered for data only payload in foreground

  * */

  this.messageListener = firebase.messaging().onMessage((message) => {

    //process data message

    console.log(JSON.stringify(message));

  });

}



showAlert(title, body) {
  Alert.alert(
    title, body,
    [

        { text: 'OK', onPress: () => console.log('OK Pressed') },

    ],
    { cancelable: false },

  );

}
  
  
  
/** Function to check permission for FCM**/
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }
  
  
  
/** Function generates and stores fcmToken in AsyncStorage of the Device**/
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(`fcmToken : ${fcmToken}`);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // User has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }
  
  
  
    /**Function Request Users for FCM messaging**/
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has Authorized.
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }}

  render() {
    return <AppContainer />;
  }
}