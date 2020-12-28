import * as React from 'react';
import { View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { graphql, createFragmentContainer } from 'react-relay';
import TouchableScale from 'react-native-touchable-scale';
import { styles } from '../Repositories/styles';
import moment from 'moment';

interface ComponentProps {
    item: any;
}

export type Props = ComponentProps;

export const Commit = (props: Props): JSX.Element => {
    const { item } = props;
    return (
        <TouchableScale style={{ flex: 1 }} activeScale={0.9} tension={50} friction={7} useNativeDriver>
            <ListItem
                accessible={true}
                accessibilityLabel="character details"
                testID={'repository-' + item.name}
                containerStyle={styles.listItem}
                bottomDivider
            >
                <ListItem.Content>
                    <View>
                        <Text style={{ color: 'grey' }}>since {moment(item.author?.date).fromNow()}</Text>
                    </View>
                    <ListItem.Title style={{ marginVertical: 5 }}>
                        <Text style={{ fontSize: 18 }}>{item.messageHeadline}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <View>
                            <Text style={{ color: 'darkgrey', fontSize: 16 }}>
                                {item.author?.name} / {item.author?.email}
                            </Text>
                        </View>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </TouchableScale>
    );
};

export default createFragmentContainer(Commit, {
    item: graphql`
        fragment Commit_item on Commit {
            messageHeadline
            author {
                name
                email
                date
            }
        }
    `,
});
