import * as React from 'react';
import { ListItem } from 'react-native-elements';
import { graphql, createFragmentContainer } from 'react-relay';
//import { isEmpty } from 'lodash';
import { styles } from './styles';

interface ComponentProps {
    item: any;
}

export type Props = ComponentProps;

export const RepositoryItem = (props: Props): JSX.Element => {
    const { item } = props;
    return (
        <ListItem
            accessible={true}
            accessibilityLabel="character details"
            testID={'repository-' + item.id}
            containerStyle={styles.listItem}
            bottomDivider
            onPress={() => {
                return;
            }}
        >
            <ListItem.Content style={{ flexGrow: 1, flex: 1 }}>
                <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default createFragmentContainer(
    RepositoryItem,
    // Each key specified in this object will correspond to a prop available to the component
    {
        item: graphql`
            # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
            fragment Repository_item on Repository {
                name
                stargazerCount
                primaryLanguage {
                    id
                    name
                }
            }
        `,
    },
);
