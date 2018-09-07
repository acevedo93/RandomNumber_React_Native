import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
const Nav = (props) => {
    return (
        <View style={styles.nav}>
            <Text>{props.nameOfApp}</Text>
        </View>
            
    );
}


const styles = StyleSheet.create({
    nav : {
        backgroundColor:'#eaeaea',
        alignItems:'center',
        padding:10,
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'#dddddd'

    }

})

export default Nav;
