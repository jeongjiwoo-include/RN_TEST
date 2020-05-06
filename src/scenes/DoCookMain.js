import React from 'react';
import { Component } from 'react';
import { Fonts } from '../Font';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  TextComponent,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import{
  LoginButton,
  LoginManager,
  AccessToken,
} from 'react-native-fbsdk';

import {Facebook} from 'react-native-fbsdk';
import {SwitchNavigation} from '@react-navigation/native';

import {firebase} from '@react-native-firebase/auth';
import { color } from 'react-native-reanimated';
import Login from './LoginForm';
import Articles from './Articles';
import SignUp from './SigninForm';


class A2_DoCookMain extends Component {

    state = {
        loggedIn: false
    }


    renderContent =()=>{
        switch(this.state.loggedIn){
            case false:
                return <Login/>
                
            case true:
                return <Articles/>    
        }
    }
  render() {
            return(
        <View style = {styles.container}>
            {this.renderContent()}
        </View>
          );
    } 
}
    

const App = () => {
  return (
  <A2_DoCookMain/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column', 
  },
  picture: {
    height: '100%',
  },
  Box: {
    alignItems: 'center',
  },
  AllLogo: {
    paddingTop: 200,
  },
  Slogan: {
    color: '#ffffff',
    fontFamily: Fonts.NotoSansKR_Medium,
    fontSize: 18,
  },
  Logo: {
    width: 220,
    height: 40,
  },
  Button: {
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginTop: 90,
  },
  FBButton:{
    width: 300, 
    height : 48, 
    marginTop: 10, 
    borderRadius: 3,
  }
});
export default A2_DoCookMain;