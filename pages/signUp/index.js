import React,{Component} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

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
            passwordConfirm: ''
        }
    }

    login = () => {
        this.props.history.push("/")
    }

    routeSignUp = () => {
        console.log('signup')
    }

    render(){
        return(
            <View style = {styles.content}>
                <Text>Username</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.text}
                 />
                <Text>Email</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(passWord) => this.setState({passWord})}
                value={this.state.text}
                 />
                <Text>Password</Text>
                <TextInput
                style={styles.TextInput}
                onChangeText={(passWord) => this.setState({passWord})}
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