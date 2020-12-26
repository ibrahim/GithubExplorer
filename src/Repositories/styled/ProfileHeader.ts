import Styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ProfileHeaderContainer = Styled.View`
	flex:1;
	background-color:#FFF;
	width: ${wp('100%')}px;
	padding-top: ${hp('2%')}px;
	padding-bottom: ${hp('2%')}px;
	flex-basis: ${hp('10%')}px;
	flex-flow:column;
	align-items:center;
	justify-content:flex-start;
`;
