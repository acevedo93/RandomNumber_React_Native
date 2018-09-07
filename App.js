import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav/Nav'
import Generate from './src/Generator/Generator'
import ListItem from './src/Generator/ListItem'

export default class App extends React.Component {
  state = {
    nameOfApp :'My Awesome App',
    random:[20,30]
  }


  onAddRandom = ()=> {
   const random = Math.floor(Math.random()*100) + 1
   this.setState(prevState =>{
     return{
      random:[...prevState.random,random]
    }
   })
  }

  onItemDelete = i => {
    this.setState(prevState => {
      return{
        random:prevState.random.filter((item,index)=>{
            return i!== index
        })
      }
    })

  }
  
  render() {
    return (
      <View style={styles.container}>
          <Nav nameOfApp={this.state.nameOfApp}/>
          <Generate add={this.onAddRandom} />
          <ListItem items={this.state.random} delete={this.onItemDelete}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'flex-end',
    justifyContent: 'flex-start',
    marginTop: 20
  }
});
