import AccountScreen from './src/AccountScreen';
import React ,{Component} from 'react'
import OrderScreen from './src/OrderScreen';
import AddressScreen from './src/AddressScreen';
import SubscriptionScreen from './src/SubscriptionScreen';
import DetailScreen from './src/DetailScreen';
import PaymentScreen from './src/PaymentScreen';
import HelpScreen from './src/HelpScreen';
import HelpDetail from './src/HelpDetail';
import MapScreen from './src/MapScreen';
import EditScreen from './src/EditScreen';
import TempScreen from './src/tempScreen';
import Temp2Screen from './src/Temp2Screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
  Temp2:Temp2Screen,
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