import * as React from 'react';
import { FlatList } from 'react-native';
//import { List_repositories } from './__generated__/List_repositories.graphql';
import { graphql, createFragmentContainer } from 'react-relay';
//import { isEmpty } from 'lodash';
import { styles } from './styles';
import Repository from './Repository';

export interface ComponentProps {
    repositories: any;
}

export type Props = ComponentProps;

export const RepositoriesList = (props: Props): JSX.Element => {
    const { repositories } = props;
    const items = repositories.edges.map(({ node }: any) => node);
    return (
        <FlatList
            testID="flat-list"
            data={items}
            renderItem={({ item }) => <Repository item={item} />}
            //onEndReached={onEndReached}
            //onEndReachedThreshold={0.2}
            keyExtractor={(item) => 'item-' + item.id}
            //ListFooterComponent={<Footer info={info} />}
            //ListFooterComponentStyle={{ padding: 80 }}
            //ListEmptyComponent={hasError ? <ErrorMessage errorMessages={errorMessages} /> : <Loading />}
            contentContainerStyle={styles.content}
            maxToRenderPerBatch={20}
        />
    );
};

export default createFragmentContainer(RepositoriesList, {
    repositories: graphql`
        fragment List_repositories on RepositoryConnection {
            edges {
                node {
                    id
                    ...Repository_item
                }
            }
        }
    `,
});
