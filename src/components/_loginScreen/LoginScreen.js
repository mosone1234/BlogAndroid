import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow Login</Text>
            </View>
        );
    }

}

export default LoginScreen;