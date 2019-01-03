import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
        marginBottom:30,
        marginTop:30
    },
    descriptionContainer: {
        marginBottom:15
    },
    name:{
        marginBottom:10
    },
    info:{
        marginBottom:5
    },
    button: {
        alignItems:'center',
        borderRadius:10,
        padding:10,
        width:50,
        backgroundColor:'grey'
    },
    bio:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'lightgrey',
        marginBottom:10
    }
})