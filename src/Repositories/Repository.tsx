import * as React from 'react';
import { ListItem, Text } from 'react-native-elements';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import { isEmpty } from 'lodash';
import { styles } from './styles';

interface ComponentProps {
    item: any;
}

export type Props = ComponentProps;

const getLang = (item: any): string => {
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
    const { item } = props;
    return (
        <ListItem
            accessible={true}
            accessibilityLabel="character details"
            testID={'repository-' + item.name}
            containerStyle={styles.listItem}
            bottomDivider
            onPress={() => {
                return;
            }}
        >
            <View style={{ width: 30 }}>
                <MaterialCommunityIcons name={getLang(item) as any} size={32} color={item.primaryLanguage?.color} />
            </View>
            <ListItem.Content>
                <ListItem.Title>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                    <Text style={{ color: 'grey' }}>{item.primaryLanguage?.name}</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default createFragmentContainer(RepositoryItem, {
    item: graphql`
        fragment Repository_item on Repository {
            name
            stargazerCount
            primaryLanguage {
                id
                name
                color
            }
        }
    `,
});
