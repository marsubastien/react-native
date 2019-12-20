import React, { Component } from 'react';
import { Text, TextInput ,View, Button } from 'react-native';
//import {Header} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-community/async-storage';


import User from "./lib/user" ;
import LoginScreen from './loginScreen';
import Profile from './profile';

export default class UserAccount extends Component {
  state = {
    logged : false
  };
  componentDidMount() {
    
    let me = this ;
    User.onChange((newState, previous) => {
        me.setState({user : newState, logged : !!newState.email})
    })
  }

  render() {
    return (    
      <View style={{flex: 1, backgroundColor:'#FF430020'}}>
      {this.state.logged ? <Profile /> : <LoginScreen /> }
      </View>      
    );
  }
}