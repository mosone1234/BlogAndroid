import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow Home from Bolivia</Text>
            </View>
        )
    }
}

export default HomeScreen;