import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';


const Generate = (props) => {
    return(
        <TouchableWithoutFeedback 
        onPress={()=> props.add()} 
        //onLongPress={()=>alert('onLongPress')}}
        //onPressIn={()=> alert('onPressIn')}
        //onPressOut={()=> alert('onPressOut')}> *
        >
            <View style={styles.generate}>
                <Text>Add Number</Text>
            </View>
        </TouchableWithoutFeedback>        
       
    )
}


const styles = StyleSheet.create({
    generate:{
        padding:10,
        alignItems:'center',
        backgroundColor:'#00bcd4',
        width:'100%',
        marginTop:20
    }
})


export default Generate