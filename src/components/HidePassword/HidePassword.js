import React, { Component } from 'react';
import { View,TouchableOpacity } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class HidePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }
  
  render() {
    const { password } = this.state;
    
    return (
      <View style={{ marginTop: -20 }}>

        <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
          label=""
        />

        <TouchableOpacity
          title="Clear"
          onPress={() => this.input.clear()} />
          
      </View>
    );
  }
}