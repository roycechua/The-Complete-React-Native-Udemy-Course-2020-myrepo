import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, placeholder, value, style, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={{...style, ...styles.inputStyle}} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export { Input }; 
