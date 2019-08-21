import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

class DashboardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hellow DashboardScreen</Text>
            </View>
        );
    }
}

export default DashboardScreen;