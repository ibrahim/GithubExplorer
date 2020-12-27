import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Details: { item: Repository };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export interface AppRouteProp {
    route: DetailsScreenRouteProp;
}

export interface Repository {
    id: string;
    name: string;
    description: string;
    stargazerCount: number;
    primaryLanguage: {
        id: string;
        name: string;
        color: string;
    };
}

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export interface NavigationProp {
    navigation: HomeScreenNavigationProp | DetailsScreenNavigationProp;
}
