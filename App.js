import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';
import Nav from './src/Nav/Nav'
import Generate from './src/Generator/Generator'
import ListItem from './src/Generator/ListItem'
import Input from './src/Input/Input'
import PickerComponent from './src/Picker/Picker';
import Spinetta from './src/luis-alberto-spinetta0.jpg'

export default class App extends React.Component {
  state = {
    nameOfApp :'My Awesome App',
    random:[20,30],
    loading:false
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
            return i !== index
        })
      }
    })

  }
  
  render() {
    return (
      <View style={styles.container}>
          <Nav nameOfApp={this.state.nameOfApp}/>
          
          <ScrollView 
          style={{width:'100%'}}
          //onContentSizeChange={(w,h) => alert(h)}
          //onScroll={()=> alert('scrolling')}
          >
            <View style={styles.wrapper}>
              <Generate add={this.onAddRandom} />
              <ListItem items={this.state.random} delete={this.onItemDelete}/>
              {/* <Input/> */}
              <PickerComponent/>
              {/* <ActivityIndicator
                size='large'
                color='red'
                animating={this.state.loading}
              
              /> */}
              <Image 
              source={Spinetta}
              style = {styles.image}
              resizeMode="contain"
              onLoadEnd={()=>alert('loaded')}
              />
              <Image 
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WMuPg-nFBxUg0pOo0wmx1GLQiP2HEhi-5k4_KFq7OBqjA9psyg'}}
              style = {styles.image}
              resizeMode="contain"
              onLoadEnd={()=>alert('loaded')}
              />
            </View>
          </ScrollView>
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
  },
  wrapper:{
    flex:1,
    width:'100%',
    padding:20,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  image:{
    width:'100%',
    height:300,
    marginTop:20
  }
});
