import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Image,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {H3,H1,Textarea} from 'native-base';

import styles from './style';

export default class Profile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                style={styles.image}
                source={{uri:'http://tommycarrascal.me/assets/images/Profile.jpg'}}
                />
                <View style={styles.descriptionContainer}>
                    <H1 style={styles.name}>Tommy Carrascal</H1>
                    <H3 style={styles.info}>Level: Expert Hacker</H3>
                    <H3 style={styles.info}>Florida International University</H3>
                    <H3 style={styles.info}>Tags: Front-end</H3>
                    <H3 style={styles.info}>Bio:</H3>
                    <TextInput style={styles.bio} mutliLine={true}  value="I like webstuff "/>
                    <H3 style={styles.info}>Github:</H3>
                    <H3 style={styles.info}>Portfolio:</H3>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {Actions.EditProfile()}} title="edit">
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
//add devpost