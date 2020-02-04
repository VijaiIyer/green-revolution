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
  },
{
  initialRouteName: 'Account',
  defaultNavigationOptions: {
    headerShown:false,
  },
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}