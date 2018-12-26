import React, {Component} from 'react';
import {NativeRouter,Switch,Route} from 'react-router-native';
import {AsyncStorage} from 'react-native';

import MainView from './mainview';

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
        //    <NativeRouter>
        //        <Switch>
        //            <Route path = "/main" Component = {MainView} />
        //        </Switch>
        //    </NativeRouter>
            <MainView />
        )
    }
}