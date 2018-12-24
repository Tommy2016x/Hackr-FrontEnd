import React, {Component} from 'react';
import {View,TextInput,StyleSheet,Text,Button,AsyncStorage} from 'react-native';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

//styling 
let styles = StyleSheet.create({
    TextInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: '50%',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 5
    },
    buttonStyle: {
        margin: 5
    }
});

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //authenticates user
    login = async () => {
        console.log('login')

        let {email,password} = this.state;

        try{
            let data = await axios.post('http://192.168.10.102:3000/users/login',{email,password})
            token = data.data

            token ? console.log(jwtDecode(token)) : console.log('invalid info')
            
            if(token){
                await AsyncStorage.setItem("token",token);
                
                this.props.history.push("/main");
            }
        }catch(err){
            console.log(err);
        }

    }

    //routes to signup page
    routeSignUp = () => {
        this.props.history.push("/signup");
    }

    render(){
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
                    onPress = {this.login}
                    style={styles.buttonStyle}
                    />
                    <Button 
                    title='Signup'
                    onPress = {this.routeSignUp}
                    style={styles.buttonStyle}
                    />
                </View> 
          </View>
        )
    }
}
