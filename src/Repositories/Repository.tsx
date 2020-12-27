import * as React from 'react';
import { ListItem, Text } from 'react-native-elements';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { graphql, createFragmentContainer } from 'react-relay';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import { Repository } from '../types';
import { styles } from './styles';

interface ComponentProps {
    item: any;
}

export type Props = ComponentProps;

export const getLang = (item: Repository): string => {
    const lang = item.primaryLanguage?.name?.toLowerCase();
    switch (lang) {
        case 'html':
            return 'language-html5';
        case 'css':
            return 'language-css3';
        case 'elm':
            return 'language-haskell';
        case 'c++':
            return 'language-cpp';
        case 'exlixir':
            return '';
        case undefined:
            return 'hexagon-multiple-outline';
        default:
            return 'language-' + lang;
    }
};
export const RepositoryItem = (props: Props): JSX.Element => {
    const navigation = useNavigation();
    const { item } = props;
    const languageName = getLang(item);
    return (
        <TouchableScale
            style={{ flex: 1 }}
            activeScale={0.9}
            tension={50}
            friction={7}
            useNativeDriver
            onPress={() => navigation.navigate('Details', { id: item.id, item })}
        >
            <ListItem
                accessible={true}
                accessibilityLabel="character details"
                testID={'repository-' + item.name}
                containerStyle={styles.listItem}
                bottomDivider
                onPress={() => navigation.navigate('Details', { item })}
            >
                <View style={{ width: 30 }}>
                    <MaterialCommunityIcons name={languageName as any} size={32} color={item.primaryLanguage?.color} />
                </View>
                <ListItem.Content>
                    <ListItem.Title>
                        <SharedElement id={'name-' + item.id}>
                            <Text style={{ fontSize: 18 }}>{item.name}</Text>
                        </SharedElement>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text style={{ color: 'grey' }}>{item.primaryLanguage?.name}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </TouchableScale>
    );
};

export default createFragmentContainer(RepositoryItem, {
    item: graphql`
        fragment Repository_item on Repository {
            name
            stargazerCount
            description
            primaryLanguage {
                id
                name
                color
            }
        }
    `,
});
