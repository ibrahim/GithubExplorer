import { RepositoriesQuery } from '../__generated__/RepositoriesQuery.graphql';
import React from 'react';
import { Text } from 'react-native';
//import { graphql } from 'babel-plugin-relay/macro';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../relay-env';
import List from './List';

const repositoriesQuery = graphql`
    query RepositoriesQuery($limit: Int) {
        viewer {
            login
            repositories(first: $limit) {
                ...List_repositories
            }
        }
    }
`;

export const ReposScreen = (): JSX.Element => {
    return (
        <QueryRenderer<RepositoriesQuery>
            environment={environment}
            query={repositoriesQuery}
            variables={{ limit: 20 }}
            render={({ error, props }) => {
                if (error) {
                    return <Text>Error!</Text>;
                }
                if (!props) {
                    return <Text>Loading...</Text>;
                }
                return <List repositories={props.viewer?.repositories} />;
            }}
        />
    );
};
export default ReposScreen;
