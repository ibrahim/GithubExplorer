import { RepositoriesQuery } from './__generated__/RepositoriesQuery.graphql';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../relay-env';
import { Layout } from './styled';
import { Loading } from './helpers';
import List from './List';
import ProfileHeader from './ProfileHeader';
import * as Constants from '../constants';

const repositoriesQuery = graphql`
    query RepositoriesQuery($pageSize: Int!, $after: String, $isFork: Boolean) {
        viewer {
            ...ProfileHeader_viewer
            ...List_viewer
        }
    }
`;

export const ReposScreen = (): JSX.Element => {
    return (
        <QueryRenderer<RepositoriesQuery>
            environment={environment}
            query={repositoriesQuery}
            variables={{ pageSize: Constants.REPO_PER_PAGE, isFork: false }}
            render={({ error, props }) => {
                if (error) {
                    return <Text>Error!</Text>;
                }
                if (!props) {
                    return <Loading />;
                }
                return (
                    <Layout>
                        <StatusBar style="auto" />
                        <ProfileHeader viewer={props.viewer} />
                        <List viewer={props.viewer} />
                    </Layout>
                );
            }}
        />
    );
};
export default ReposScreen;
