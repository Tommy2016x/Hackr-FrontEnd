import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {Tabs,Tab,Container} from 'native-base';

import ProfilePage from '../profile';
import Chats from '../chats';
import Swiping from '../swiping';

export default class MainView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Tabs>
                    <Tab heading="1">
                        <ProfilePage />
                    </Tab>
                    <Tab heading="2">
                        <View>
                            <Swiping />
                        </View>
                    </Tab>
                    <Tab heading="3">
                        <View>
                            <Chats />
                        </View>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}