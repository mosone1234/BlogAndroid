import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome To App</Text>
            </View>
        );
    }
}

export default WelcomeScreen;