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

import {firebase} from '@react-native-firebase/auth';
import { color } from 'react-native-reanimated';

class A2_DoCookSignin_Articles extends Component {

  render() {
            return(
            <View style = {styles.container}>
                <View style={styles.articleContainer}>
                    <Text style={styles.heading}>
                        요리하기 페이지!
                    </Text>
                    <Text style={styles.content}>
                        요리하기 페이지로 사용하면 될 것 같음.
                    </Text>

                    <TouchableOpacity style={{padding:20}}>
                        <Text style={{color:'#DE6139'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
        </View>
          );
    } 
}
    

const App = () => {
  return (
  <A2_DoCookSignin_Articles />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  articleContainer:{
    padding:10,
    borderBottomColor:'rgba(255,255,255,.7)',
    borderBottomWidth:5,
  },
  heading:{
      fontSize:22,
      color:'black',
      marginBottom:10,
  },
  content:{
      marginTop:10,
      fontSize:19,
  },
});
export default A2_DoCookSignin_Articles;