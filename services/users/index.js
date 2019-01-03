import axios from 'axios';
import {AsyncStorage,Alert} from 'react-native';
import jwtDecode from 'jwt-decode';

//authenticates user and routes them to main page
login = async (email,password,history) => {
    console.log('login');

    if(!email || !password)
        Alert.alert('Please fill out required information');
    
    else{
        try{
            let data = await axios.post('http://192.168.10.102:3000/users/login',{email,password})
            token = data.data;
            
            if(token){
                await AsyncStorage.setItem("token",token);
                
                history.push("/main");
            }
            else
                Alert.alert('Wrong login info');
        }catch(err){
            console.log(err);
        }
    }
}

//signs up a new user and routes them to main page
SignUpUser = async (email,password,passwordConfirm,history) => {
    console.log('signup')

    if(!email || !password || !passwordConfirm)
        Alert.alert('Please fill out required information');

    else if(password != passwordConfirm)
        Alert.alert('Passwords do not match');

    else{
        try{
            let data = await axios.post('http://192.168.10.102:3000/users/signup',{email,password})
            token = data.data;

            token ? console.log(jwtDecode(token)) : console.log('username or email already exists')
            
            if(token){
                await AsyncStorage.setItem("token",token);
                
                history.push("/main");
            }
            else
                Alert.alert('User already exists');
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = {SignUpUser,login}; 