import * as React from 'react';
import { FlatList, Platform, ActivityIndicator } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { graphql, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import { ScrollingList, FooterContainer } from './styled';
import Repository from './Repository';
import * as Constants from '../constants';

export interface ComponentProps {
    viewer: any;
    relay: RelayPaginationProp;
}

export type Props = ComponentProps;

export const RepositoriesList = (props: Props): JSX.Element => {
    const { viewer, relay } = props;
    const repositories = viewer?.repositories;

    const pageInfo = repositories?.pageInfo;
    const items = repositories?.edges.map(({ node }: any) => node);

    const [isFork, setIsFork] = React.useState(false);
    const listRef = React.useRef<FlatList<any>>(null);
    const onEndReached = async () => {
        if (relay.isLoading()) return;
        if (pageInfo.hasNextPage) {
            /* eslint-disable no-console */
            console.log('load more');
            await relay.loadMore(Constants.REPO_PER_PAGE);
        } else {
            /* eslint-disable no-console */
            console.log('Has no more or isLoading');
            return null;
        }
    };

    const buttons = ['Original', 'Forked'];
    const selectRepositoriesType = React.useCallback(
        async (index) => {
            const repoType = index === 1 ? true : false;
            if (relay.isLoading()) return;
            setIsFork(repoType);
            await relay.refetchConnection(
                Constants.REPO_PER_PAGE,
                (error) => {
                    if (error) {
                        console.log({ error });
                    } else {
                        listRef?.current?.scrollToOffset({ animated: true, offset: 0 });
                    }
                },
                {
                    isFork: repoType,
                },
            );
        },
        [relay],
    );

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
            <ButtonGroup
                onPress={selectRepositoriesType}
                selectedIndex={isFork ? 1 : 0}
                buttons={buttons}
                containerStyle={{ height: 36, marginHorizontal: 50 }}
                textStyle={{ fontSize: 17 }}
            />
            <FlatList
                testID="flat-list"
                ref={listRef}
                data={items}
                renderItem={({ item }) => <Repository item={item} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.2}
                keyExtractor={(item) => 'item-' + item.id}
                ListFooterComponent={Footer}
                //ListEmptyComponent={hasError ? <ErrorMessage errorMessages={errorMessages} /> : <Loading />}
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
                repositories(first: $pageSize, after: $after, isFork: $isFork) @connection(key: "List_repositories") {
                    pageInfo {
                        endCursor
                        startCursor
                        hasNextPage
                        hasPreviousPage
                    }
                    edges {
                        node {
                            id
                            ...Repository_item
                        }
                        cursor
                    }
                }
            }
        `,
    },
    {
        query: graphql`
            # Pagination query to be fetched upon calling 'loadMore'.
            # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
            query ListPaginationQuery($pageSize: Int!, $after: String, $isFork: Boolean) {
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
        getVariables(props, pageInfo, fragmentVariables) {
            console.log({ fragmentVariables, pageInfo, qpageInfo: props.viewer?.repositories?.pageInfo });
            return {
                pageSize: Constants.REPO_PER_PAGE,
                //after: props.viewer?.repositories?.pageInfo?.endCursor,
				isFork: fragmentVariables.isFork,
                after: pageInfo.cursor,
            };
        },
    },
);
