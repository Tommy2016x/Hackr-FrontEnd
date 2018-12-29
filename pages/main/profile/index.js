import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container} from 'native-base';

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Profile page</Text>
                <Button onPress={() => {Actions.EditProfile()}} title="edit"/>
            </View>
        );
    }
}