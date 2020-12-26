import Styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Layout = Styled.SafeAreaView`
	flex:1;
	display:flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #FFFFFF;
`;
export const LoadingContainer = Styled.SafeAreaView`
	flex:1;
	width: ${wp('100%')}px;
	height: ${hp('100%')}px;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
`;

export * from './List';
export * from './Repository';
export * from './ProfileHeader';
