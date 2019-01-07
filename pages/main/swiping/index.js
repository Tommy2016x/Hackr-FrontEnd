import React, {Component} from 'react';
import {View} from 'react-native';
import {Container,Button,Text} from 'native-base';

import CardView from '../../../components/card';

export default class Swiping extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <CardView />
                <View>
                    <Button rounded succcess>
                        <Text>Yes</Text>
                    </Button>
                    <Button rounded danger>
                        <Text>No</Text>
                    </Button>
                </View>
            </View>
        );
    }
}