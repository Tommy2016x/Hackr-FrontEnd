import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Container} from 'native-base';

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Profile page</Text>
            </View>
        );
    }
}