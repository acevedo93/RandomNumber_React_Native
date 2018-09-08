import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, Button,Modal } from 'react-native';

class ModalComponent extends Component {
    state={
        modal:false
    }


    handleModal = () =>{
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }

    render(){
        return(
            <View style={{width:'100%'}}>
                <Button
                title='Open Modal'
                onPress={this.handleModal}
                />


                <Modal
                    visible= {this.state.modal}
                >
                    <View style={{ 
                        marginTop:20,
                        backgroundColor:'red'
                    }}>
                        <Text> My modal component</Text>
                    </View>
                    <Button 
                        title='CLose Modal'
                        onPress={this.handleModal}
                    />

                </Modal>
            
            </View>
        )
    }
}



export default ModalComponent