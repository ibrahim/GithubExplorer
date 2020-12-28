import * as React from 'react';
import { Text, Avatar } from 'react-native-elements';
import { graphql, createFragmentContainer } from 'react-relay';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileHeaderContainer } from './styled';

interface ComponentProps {
    viewer: any;
}

export type Props = ComponentProps;
export const ProfileHeader = (props: Props): JSX.Element => {
    const { viewer } = props;
    return (
        <ProfileHeaderContainer>
            <LinearGradient
                start={{ x: 0.1, y: 0.2 }}
                colors={['#7c3350', '#499ad5']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: '55%',
                }}
            />
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
