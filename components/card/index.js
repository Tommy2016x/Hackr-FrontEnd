import React,{Component} from 'react';
import { Image,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>Tommy Carrascal</Text>
                            <Text note>Florida International University</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image 
                        source={{uri:'http://tommycarrascal.me/assets/images/Profile.jpg'}}
                        style={{height: 410, width: null, flex: 1}}
                    />
                </CardItem>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>Tags:</Text>
                            <Text note>Full-Stack, Design</Text>
                        </Body>
                    </Left>
                    <Body>
                        <Text>Hacker Level:</Text>
                        <Text note>Expert</Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}