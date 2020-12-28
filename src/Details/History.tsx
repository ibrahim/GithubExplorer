import * as React from 'react';
import { FlatList, Platform, ActivityIndicator } from 'react-native';
import { graphql, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import { ScrollingList, FooterContainer } from '../Repositories/styled';
import Commit from './Commit';
import * as Constants from '../constants';

export interface ComponentProps {
    viewer: any;
    relay: RelayPaginationProp;
}

export type Props = ComponentProps;

export const History = (props: Props): JSX.Element => {
    const { viewer, relay } = props;

    const history = viewer?.repository?.defaultBranchRef?.target?.history;
    const pageInfo = history?.pageInfo;
    const items = history?.edges.map(({ node }: any) => node);

    const listRef = React.useRef<FlatList<any>>(null);
    const onEndReached = async () => {
        if (relay.isLoading()) return;
        if (pageInfo.hasNextPage) {
            relay.loadMore(Constants.REPO_PER_PAGE);
        } else {
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
                ref={listRef}
                data={items}
                renderItem={({ item }) => <Commit item={item} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.2}
                keyExtractor={(item) => 'item-' + item.id}
                ListFooterComponent={Footer}
                maxToRenderPerBatch={20}
            />
        </ScrollingList>
    );
};

export default createPaginationContainer(
    History,
    {
        viewer: graphql`
            fragment History_viewer on User {
                repository(name: $name) {
                    defaultBranchRef {
                        target {
                            id
                            ... on Commit {
                                id
                                history(first: $pageSize, after: $after) @connection(key: "commits_history") {
                                    pageInfo {
                                        hasNextPage
                                        endCursor
                                        startCursor
                                        hasPreviousPage
                                    }
                                    edges {
                                        node {
                                            id
                                            ...Commit_item
                                        }
                                    }
                                }
                            }
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
            query HistoryPaginationQuery($name: String!, $pageSize: Int!, $after: String) {
                viewer {
                    ...History_viewer
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
        getVariables(props, pageInfo, fragmentVariables) {
            return {
                pageSize: Constants.REPO_PER_PAGE,
                //after: props.viewer?.repositories?.pageInfo?.endCursor,
                name: fragmentVariables.name,
                after: pageInfo.cursor,
            };
        },
    },
);
