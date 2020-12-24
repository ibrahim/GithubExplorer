import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './list'


export type RootStackParamList = {
    Home: undefined;
    Details: { id: string };
};
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ title: 'Rick And Morty' }}>
                    {() => <List />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
