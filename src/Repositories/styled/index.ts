import Styled from 'styled-components/native';

export const Layout = Styled.SafeAreaView`
	flex:1;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export * from './List';
export * from './Repository';
export * from './ProfileHeader';
