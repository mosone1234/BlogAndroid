import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

class HomeScreen extends Component {
    redirecToDashBoard = () => {
        console.log('Muestra esta parte --> ', this.props.navigation.navigate('Dashboard'));
        this.props.navigation.navigate('Dashboard');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow Home from Bolivia</Text>
                <Button title="Go Dashboard" onPress={this.redirecToDashBoard} />
            </View>
        )
    }
}

export default HomeScreen;