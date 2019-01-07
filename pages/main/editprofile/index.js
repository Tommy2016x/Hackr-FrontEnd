import React, {Component} from 'react';
import{View,Text} from 'react-native';
import {H3,Input,Item,Button} from 'native-base';

import styles from './style';

export default class EditProfile extends Component{
    constructor(props){
        super(props);

        this.state={
            school: "FIU",
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <H3>School</H3>
                <Item>
                    <Input onChangeText={(school) =>this.setState({school})} value={this.state.school} />
                </Item>
                <Button onPress={() => console.log(this.state.school)}>
                    <Text>log</Text>
                </Button>
            </View>
        )
    }
}