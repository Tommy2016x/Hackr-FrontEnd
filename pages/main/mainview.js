import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {Tabs,Tab,Container} from 'native-base';

import ProfilePage from './profile';

export default class Main extends Component{
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
                            <Text>Hi</Text>
                        </View>
                    </Tab>
                    <Tab heading="3">
                        <View>
                            <Text>Hi</Text>
                        </View>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}