import React,{Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet,AsyncStorage} from 'react-native';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import styles from './styles';

import {SignUpUser} from '../../services/users';

export default class SignUp extends Component{
    constructor(props){
        super(props);

        this.state={
            password: '',
            email: '',
            passwordConfirm: ''
        }
    }

    render(){

        let {email,password,passwordConfirm} = this.state;
        let {history} = this.props;

        return(
            <View style = {styles.content}>
                <Text>Email</Text>
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
                <Text>Confirm Password</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
                value={this.state.text}
                 />
                <View style={styles.buttons}>
                    <Button 
                    title = "Back"
                    onPress = {() => {this.props.history.push("/")}}
                    style={styles.buttonStyle}
                    />
                    <Button 
                    title='Signup'
                    onPress = {() => SignUpUser(email,password,passwordConfirm,history)}
                    style={styles.buttonStyle}
                    />
                </View> 
          </View>
        )
    }
}