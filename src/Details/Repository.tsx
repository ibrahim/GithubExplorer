import { RepositoryQuery } from './__generated__/RepositoryQuery.graphql';
import React from 'react';
import { Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../relay-env';
import { Loading } from '../Repositories/helpers';
import * as Constants from '../constants';
import History from './History';

const repositoryQuery = graphql`
    query RepositoryQuery($name: String!, $pageSize: Int!, $after: String) {
        viewer {
            ...History_viewer
        }
    }
`;

interface ComponentProps {
    name: string;
}

type Props = ComponentProps;
export const ReposScreen = (props: Props): JSX.Element => {
    const { name } = props;
    return (
        <QueryRenderer<RepositoryQuery>
            environment={environment}
            query={repositoryQuery}
            variables={{ pageSize: Constants.REPO_PER_PAGE, name }}
            render={({ error, props }) => {
                if (error) {
                    return <Text>Error!</Text>;
                }
                if (!props) {
                    return <Loading />;
                }
                return <History viewer={props.viewer} />;
            }}
        />
    );
};
export default ReposScreen;
