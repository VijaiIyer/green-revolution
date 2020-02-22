import { AsyncStorage , Alert,View,Animated,Easing} from 'react-native';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import {Icon} from 'native-base';
import firebase from 'react-native-firebase';
import React ,{Component} from 'react'
import RegisterScreen from './src/AuthStack/Screens/RegisterScreen';
import SplashScreen from './src/AuthStack/Screens/Splash';
import OtpScreen from './src/AuthStack/Screens/OtpScreen';
import SUB_HomeScreen from './src/SubscribeStack/Screens/HomeScreen'
import SUB_ProductScreen from './src/SubscribeStack/Screens/ProductScreen'
import SUB_SubscriptionScreen from './src/SubscribeStack/Screens/SubscriptionScreen'
import TRY_HomeScreen from './src/TryStack/Screens/HomeScreen'
import TRY_SubscriptionScreen from './src/TryStack/Screens/SubscriptionScreen'
import ACC_AccountScreen from './src/AccountStack/Screens/AccountScreen';
import ACC_OrderScreen from './src/AccountStack/Screens/OrderScreen';
import ACC_AddressScreen from './src/AccountStack/Screens/AddressScreen';
import ACC_SubscriptionScreen from './src/AccountStack/Screens/SubscriptionScreen';
import ACC_DetailScreen from './src/AccountStack/Screens/DetailScreen';
import ACC_PaymentScreen from './src/AccountStack/Screens/PaymentScreen';
import ACC_HelpScreen from './src/AccountStack/Screens/HelpScreen';
import ACC_HelpDetail from './src/AccountStack/Screens/HelpDetail';
import ACC_MapScreen from './src/AccountStack/Screens/MapScreen';
import ACC_EditScreen from './src/AccountStack/Screens/EditScreen';
import ACC_TempScreen from './src/AccountStack/Screens/tempScreen';
import ACC_PaytmGateway from './src/AccountStack/Screens/PaytmGateway';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
const AccountStack = createStackNavigator({
  Temp:ACC_TempScreen,
  Map : ACC_MapScreen,
  Edit: ACC_EditScreen,
  Account: ACC_AccountScreen,
  Order : ACC_OrderScreen,
  Address: ACC_AddressScreen,
  Subscription:ACC_SubscriptionScreen,
  Detail: ACC_DetailScreen,
  Payment: ACC_PaymentScreen,
  Help:ACC_HelpScreen,
  HelpDetail:ACC_HelpDetail,
  Paytm:ACC_PaytmGateway,
  },
  {  initialRouteName: 'Account',
     gesturesEnabled:true,
     headerMode:"none",
     mode: 'card',
     defaultNavigationOptions: {
     transitionConfig:getSlideFromRightTransition,
     gesturesEnabled: true,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
  
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });
  
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
  
        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);
AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'Account' ) {
      tabBarVisible = true
  }
  return {
      tabBarVisible,
  }
}
const SubscribeStack = createStackNavigator({
  Home_sub:SUB_HomeScreen,
  Product_sub:SUB_ProductScreen,
  Subscribe_sub:SUB_SubscriptionScreen,
  },
{
  initialRouteName: 'Home_sub',
  gesturesEnabled:true,
  defaultNavigationOptions: {
    headerShown:false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});
SubscribeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'Home_sub' ) {
      tabBarVisible = true
  }
  return {
      tabBarVisible,
  }
}
const AuthStack = createStackNavigator({
  Register:RegisterScreen,
  Splash:SplashScreen,
  OTP:OtpScreen,
  },
{
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerShown:false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});
const TryStack = createStackNavigator({
  Home_try:TRY_HomeScreen,
  Subscribe_try:TRY_SubscriptionScreen,
  },
{
  initialRouteName: 'Home_try',
  defaultNavigationOptions: {
    headerShown:false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),

});
TryStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'Home_try' ) {
      tabBarVisible = true
  }
  return {
      tabBarVisible,
  }
}
const AppNavigator = createBottomTabNavigator(  
  {  
      Subscribe: { screen: SubscribeStack,  
          navigationOptions:{  
              tabBarLabel:'Subscribe',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },  
      Try: { screen: TryStack,  
          navigationOptions:{  
              tabBarLabel:'TRY',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                  </View>), 
              activeColor: '#ebebeb',  
              inactiveColor: '#0000FF', 
          }  
      },  
      Account: { screen: AccountStack,  
          navigationOptions:{  
              tabBarLabel:'Account',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                  </View>),  
              activeColor: '#ebebeb',  
              inactiveColor: '#0000FF',  
          }  
      },  
  },  
  {  
    initialRouteName: "Subscribe",   
    barStyle: { backgroundColor: '#ebebeb' },  
  },  
);  

const InitialNavigator = createSwitchNavigator(
  {
    Auth:AuthStack,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);
const AppContainer = createAppContainer(InitialNavigator);
export default class App extends Component {
  
  
  
  async componentDidMount() {
    /* Checking for permissions and creating Notification Listeners */
    global.user_details ={};
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