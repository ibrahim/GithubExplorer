import * as React from 'react';
import { Text, Avatar } from 'react-native-elements';
import { graphql, createFragmentContainer } from 'react-relay';
//import { isEmpty } from 'lodash';
import { ProfileHeaderContainer } from './styled';

interface ComponentProps {
    viewer: any;
}

export type Props = ComponentProps;
export const ProfileHeader = (props: Props): JSX.Element => {
    const { viewer } = props;
    return (
        <ProfileHeaderContainer>
            <Avatar
                imageProps={{ accessibilityLabel: 'avatar' }}
                size={'xlarge'}
                rounded
                source={{ uri: viewer.avatarUrl }}
            />
            <Text h2>{viewer.name}</Text>
        </ProfileHeaderContainer>
    );
};

export default createFragmentContainer(ProfileHeader, {
    viewer: graphql`
        fragment ProfileHeader_viewer on User {
            id
            name
            avatarUrl(size: 300)
        }
    `,
});
