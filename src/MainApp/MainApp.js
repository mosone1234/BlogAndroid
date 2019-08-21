import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import {
    HomeScreen,
    WelcomeScreen,
    DashboardScreen,
    ProfileScreen,
    SignupScreen,
    LoginScreen
} from '../components/index';

import { Button } from 'react-native';

const DashboardTabNavigator = createBottomTabNavigator(
    {
        WelcomeScreen,
        ProfileScreen
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            console.log('Router Name --> ', routeName);
            return {
                headerTitle: routeName
            };
        }
    }
);
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Button
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        title="md-menu"
                    />
                )
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    login: {
        screen: LoginScreen
    },
    signup: {
        screen: SignupScreen
    }
});

const MainNavigator = createSwitchNavigator({
    Home: { screen: HomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
});

const MainApp = createAppContainer(MainNavigator);

export default MainApp;
