import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Router, Scene } from 'react-native-router-flux';

import MainView from './mainview';
import EditProfile from './editprofile';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: null,
            id: null,
            locationData: null,
            nearbyUsers: null
        }
    }

    getCurrentPosition = (options = {}) => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };

    async componentDidMount(){
        try{
            const token = await AsyncStorage.getItem("token");

            const location = await this.getCurrentPosition();
            const{latitude,longitude} = location.coords;

            let id = await jwtDecode(token).id

            this.setState({locationData: {latitude,longitude}})
            this.setState({token});
            this.setState({id});

            await axios.patch('http://192.168.10.102:3000/users/updateOne',{
                id: this.state.id,
                param: "location",
                value: this.state.locationData
            });

            let response = await axios.post('http://192.168.10.102:3000/location/findUsers',{
                locationData: this.state.locationData
            })

            let nearbyUsers = response.data;
            
            this.setState({nearbyUsers});
            
        }catch(err){
            throw err;
        }
    }

    render(){
        return(
            <Router hideNavBar= {true}>
                <Scene key = "root">
                    <Scene key ="MainView" title="MainView" component={MainView} initial={true} {...this.state} hideNavBar />
                    <Scene key="EditProfile" title="EditProfile" component={EditProfile} {...this.state}/>
                </Scene>
            </Router>
        )
    }
}