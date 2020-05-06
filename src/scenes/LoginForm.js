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
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import {firebase} from '@react-native-firebase/auth';
import { color } from 'react-native-reanimated';

class A2_DoCookSignin_LoginForm extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

 
  render() {
            return(
            <View style = {styles.container}>
               <TextInput placeholder="email" 
                          style ={styles.input} 
                          value={this.state.email}
                          onChangeText={email=>this.setState({email})}
                          />
               <TextInput placeholder="password" 
                          style ={styles.input} 
                          vaule={this.state.password}
                          onChangeText={password=>this.setState({password})}
                          />
               <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>
               <Text style={styles.errorText}>
                       {this.state.error}
                   </Text>
        </View>
          );
    } 
}
    

const App = () => {
  return (
  <A2_DoCookSignin_LoginForm />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  input:{
      height:40,
      backgroundColor:'lightgray',
      paddingLeft:10,
      marginBottom:15,
      borderRadius:5,
      fontSize:15
  },
  errorText:{
      fontSize:15,
      color:'red',
      alignSelf:'center',
      marginTop:10,
  },
  buttonText:{
      textAlign:'center',
      color:'white',
      fontWeight:'bold',
      fontSize:20,
  },
  buttonContainer:{
      backgroundColor:'#DE6139',
      padding:10,
      borderRadius:8,
  }

});
export default A2_DoCookSignin_LoginForm;