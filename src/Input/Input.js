import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'


class Input extends Component {


  state = {
    myInput: ""
  }
  onChangeInput = (value) => {
    this.setState({
      myInput:value
    })
  }


  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
        value={this.state.myInput}
        style={styles.input}
        onChangeText={this.onChangeInput}
        multiline={true}
        maxLength={5}
        editable={true}
        autoCapitalize={'characters'}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  inputWrapper : {
    width:'100%'
  },
  input: {
    width:'100%',
    backgroundColor:'#f2f2f2',
    marginTop: 20,
    fontSize:20,
    padding:20
  }
  
})

export default Input 