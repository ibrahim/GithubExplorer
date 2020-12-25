import * as React from 'react';
import { FlatList, Platform, ActivityIndicator } from 'react-native';
import { graphql, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import { ScrollingList, FooterContainer } from './styled';
import Repository from './Repository';

export interface ComponentProps {
    viewer: any;
    relay: RelayPaginationProp;
}

export type Props = ComponentProps;

export const RepositoriesList = (props: Props): JSX.Element => {
    const { viewer, relay } = props;
    const items = viewer?.repositories?.edges.map(({ node }: any) => node);
    const onEndReached = () => {
        if (relay.hasMore() && !relay.isLoading()) {
            /* eslint-disable no-console */
            console.log('load more');
            relay.loadMore(20);
        } else {
            /* eslint-disable no-console */
            console.log('Has no more or isLoading');
            return null;
        }
    };

    const Footer = React.useCallback(
        () =>
            relay.isLoading() && relay.hasMore() ? (
                <FooterContainer>
                    <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 50} color="#555" />
                </FooterContainer>
            ) : null,
        [relay],
    );

    return (
        <ScrollingList>
            <FlatList
                testID="flat-list"
                data={items}
                renderItem={({ item }) => <Repository item={item} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.2}
                keyExtractor={(item) => 'item-' + item.id}
                ListFooterComponent={Footer}
                //ListFooterComponentStyle={{ padding: 80 }}
                //ListEmptyComponent={hasError ? <ErrorMessage errorMessages={errorMessages} /> : <Loading />}
                //contentContainerStyle={styles.content}
                maxToRenderPerBatch={20}
            />
        </ScrollingList>
    );
};

export default createPaginationContainer(
    RepositoriesList,
    {
        viewer: graphql`
            fragment List_viewer on User {
                repositories(first: $pageSize, after: $after, isFork: false) @connection(key: "List_repositories") {
                    edges {
                        node {
                            id
                            ...Repository_item
                        }
                    }
                }
            }
        `,
    },
    {
        query: graphql`
            # Pagination query to be fetched upon calling 'loadMore'.
            # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
            query ListPaginationQuery($pageSize: Int!, $after: String) {
                viewer {
                    ...List_viewer
                }
            }
        `,
        direction: 'forward',
        getConnectionFromProps(props) {
            return props.viewer && props.viewer?.repositories;
        },
        getFragmentVariables: (previousVars, pageSize) => ({
            ...previousVars,
            pageSize,
        }),
        getVariables(_props, pageInfo, _fragmentVariables) {
            return {
                pageSize: 4,
                after: pageInfo.cursor,
            };
        },
    },
);
