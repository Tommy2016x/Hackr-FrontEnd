import React, {Component} from 'react';
import {View,TextInput,StyleSheet,Text,Button,AsyncStorage} from 'react-native';
import axios from 'axios';

import styles from './styles';

import {login} from '../../services/users';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        let {email,password} = this.state;
        let {history} = this.props;

        return(
            <View style = {styles.content}>
                <Text>Username or Email</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(email) => this.setState({email})}
                value={this.state.text}
                 />
                 <Text>Password</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(password) => this.setState({password})}
                value={this.state.text}
                 />
                <View style={styles.buttons}>
                    <Button 
                    title = "Login"
                    onPress = {() => login(email,password,history)}
                    style={styles.buttonStyle}
                    />
                    <Button 
                    title='Signup'
                    onPress = {() => {this.props.history.push("/signup")}}
                    style={styles.buttonStyle}
                    />
                </View> 
          </View>
        )
    }
}
