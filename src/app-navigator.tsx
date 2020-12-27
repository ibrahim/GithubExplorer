import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Repositories from './Repositories';
import Details from './Details';
import { RootStackParamList } from './types';
enableScreens();

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ title: 'GitHub Explorer' }} component={Repositories} />
                <Stack.Screen
                    name="Details"
                    options={{
                        title: 'Repo Details',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }}
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
