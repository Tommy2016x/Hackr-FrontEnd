import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    TextInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: '50%',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 5
    },
    buttonStyle: {
        margin: 5
    }
});