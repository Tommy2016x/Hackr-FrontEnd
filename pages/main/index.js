import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: null
        }
    }

    async componentDidMount(){
        try{
            const token = await AsyncStorage.getItem("token");

            this.setState({token});

            console.log(this.state.token);
        }catch(err){
            throw err
        }
    }

    render(){
        return(
            <View>
                <Text>Dashboard</Text>
            </View>
        )
    }
}