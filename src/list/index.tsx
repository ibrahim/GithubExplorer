import { listUserReposQuery } from './__generated__/listUserReposQuery.graphql';
import React from 'react';
import { Text } from 'react-native';
//import { graphql } from 'babel-plugin-relay/macro';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../relay-env';

const userReposQuery = graphql`
    query listUserReposQuery {
        viewer {
            login
        }
    }
`;

export const ReposScreen = (): JSX.Element => {
    return (
        <QueryRenderer<listUserReposQuery>
            environment={environment}
            query={userReposQuery}
            variables={{}}
            render={({ error, props }) => {
                if (error) {
                    return <Text>Error!</Text>;
                }
                if (!props) {
                    return <Text>Loading...</Text>;
                }
                return <Text>User ID: {props.viewer?.login}</Text>;
            }}
        />
    );
};
export default ReposScreen;
