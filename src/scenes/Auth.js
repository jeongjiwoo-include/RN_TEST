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
  TouchableOpacity
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
import {firebase} from '@react-native-firebase/auth';

class A1_AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      gettingLoginStatus: true,
    };
  }
  componentDidMount(){
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '30744761308-dk6n9i1fnas22k513ca0lji9hamsgc2g.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
    this._isSignedIn();
  }
  _isSignedIn = async()=>{
    const isSignedIn = await GoogleSignin.isSignedIn();
    if(isSignedIn){
        alert('User is already signed in');
        this._getCurrentUserInfo();//Get the User details as user is already signed in
    } else {
        alert('Please Login');
        console.log('Please Login');
    }
    this.setState({gettingLoginStatus: false}); 
};

_getCurrentUserInfo=async()=>{
    try{
        const userInfo = await GoogleSignin.signInSilently();
        console.log('User Info --> ', userInfo);
        this.setState({userInfo: userInfo});
    } catch(error){
        if(error.code === statusCodes.SIGN_IN_REQUIRED) {
            alert('User has not signed in yet');
            console.log('User has not signed in yet');
        } else {
            alert("Something went wrong. Unable to get user's info");
            console.log("Something went wrong. Unable to get user's info");
        }
    }
};

_signIn=async()=>{
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        
        console.log(userInfo)
        this.setState({ 
            name:userInfo.user.name,
            email:userInfo.user.email,
            photo:userInfo.user.photo 
        })

        const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
        await firebase.auth().signInWithCredential(credential);  
      } catch (error) {
          console.log('Message', error.message);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');// user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');// operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');// play services not available or outdated
        } else {
            console.log('Some Other Error Happened');// some other error happened
        }
    }
};

_signOut = async() => {
    try{
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({userInfo: null});
    } catch(error){
        console.error(error);
    }
};
  render() {
    if(this.state.gettingLoginStatus){
      return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
    } else {
         if(this.state.userInfo != null) {
            return(
            <View style = {styles.container}>
            <ImageBackground source={require('../assets/Main-picture.jpg')} style = {styles.picture}>
              <View style = {{flex:1,
              alignSelf: 'stretch', 
              backgroundColor: 'rgba(0,0,0,0.6)'}} >
                <View style = {styles.Box}>
                  <View style = {styles.AllLogo}>
                    <Text style = {styles.Slogan}>편하게 요리하자</Text>
                    <Image source={require('../assets/Logo.png')} style = {styles.Logo } />
                  </View>
                  <View style = {styles.text}>
                    Name: {this.state.userInfo.user.name}{' '}
                  </View>
                </View>
              </View>
            </ImageBackground>
        </View>
          );
        } else{
      return(
        <View style = {styles.container}>
        <ImageBackground source={require('../assets/Main-picture.jpg')} style = {styles.picture}>
          <View style = {{flex:1,
          alignSelf: 'stretch', 
          backgroundColor: 'rgba(0,0,0,0.6)'}} >
            <View style = {styles.Box}>
              <View style = {styles.AllLogo}>
                <Text style = {styles.Slogan}>편하게 요리하자</Text>
                <Image source={require('../assets/Logo.png')} style = {styles.Logo } />
              </View>
              <View style = {styles.Button}>
          <GoogleSigninButton 
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn}
          />
        </View>
            </View>
          </View>
        </ImageBackground>
    </View>
      );
    }
}
  }
}
    

const App = () => {
  return (
  <A1_AuthPage />
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
  }
});
export default App;