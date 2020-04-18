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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class A0_startPage extends Component  {
  render() {
  return (
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
            </View>
          </View>
        </ImageBackground>
    </View>
  );
  }
}

const App = () => {
  return (
  <A0_startPage />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  }
});

export default App;
