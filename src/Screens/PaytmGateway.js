
import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
export default class PaymentGatewayTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayWebView: true
        }
    }
     getMID=()=>{
        return "Mksing29513853262834";
    } //NBATec45564621192191 Mksing29513853262834

     getMerchantKey=()=>{
        return "CKtfB5y403YiPcw1";
    }  //CKtfB5y403YiPcw1 X7Bo&TTQ4UbF&#jS

     getWebsite=()=>{
        return "APPSTAGING";
    } //WEBSTAGING //APP_STAGING

     getChannelId=()=>{
        return "WAP";
    }

     getIndustryTypeId=()=>{
        return "Retail";
    }

     getClientId=()=>{
        return "merchant-nba-tech-staging";
    }

     getSecretKey=()=>{
        return "";
    }
    
     getAuth=()=>{
        return "Basic bWVyY2hhbnQtbmJhLXRlY2gtc3RhZ2luZzoxMjUwZTg4NS0xNGY1LTQyODAtOWViYS02YjhkZWE4ZGQ3ZTk=";}

     getWalletUrl=()=>{
        return "https://pguat.paytm.com/";}
    
     getAccountUrl=()=>{
        return "https://accounts-uat.paytm.com/signin/";}

    
     getCallBackUrl=()=>{
        return "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=";
    }

    handleResponse = async(data) => {
        if(data.title == 'true') {
            //handle successfull payment here

        }else if(data.title == 'false') {
            //handle failed payment here

        }

    }
    render(){
        return (
            <WebView source={{
               uri:`https://securegw-stage.paytm.in/theia/api/v1/processTransaction?mid=${this.getMID()}&orderId=2134232&custId=#14235&txnamount=500&CHANNEL_ID=${this.getChannelId()}&WEBSITE=${this.getWebsite()}&CHECKSUMHASH=rtsdgfcsdhcds&INDUSTRY_TYPE_ID=${this.getIndustryTypeId()}`
            }}
                onNavigationStateChange={(navigationState) => {

                    if (navigationState.title == 'true') {

                        this.props.navigation.navigate('PaymentResponse', { paymentStatus: navigationState.title })

                    }

                }

                }

            />
        )
    }
}