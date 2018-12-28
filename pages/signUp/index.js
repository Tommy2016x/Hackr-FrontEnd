import React,{Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet,AsyncStorage} from 'react-native';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

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
})

export default class SignUp extends Component{
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            email: '',
            passwordConfirm: ''
        }
    }

    login = () => {
        this.props.history.push("/")
    }

    routeSignUp = async () => {
        console.log('signup')

        let {email,password,username,passwordConfirm} = this.state;

        if(password != passwordConfirm)
            console.log('passwords do not match')

        else{

        try{
            let data = await axios.post('http://192.168.10.102:3000/users/signup',{email,password,username})
            token = data.data;

            token ? console.log(jwtDecode(token)) : console.log('username or email already exists')
            
            if(token){
                await AsyncStorage.setItem("token",token);
                
                this.props.history.push("/main");
            }
        }catch(err){
            console.log(err);
        }
    }

    }

    render(){
        return(
            <View style = {styles.content}>
                <Text>Username</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(username) => this.setState({username})}
                value={this.state.text}
                 />
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