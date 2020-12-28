import Styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ProfileHeaderContainer = Styled.View`
	position: relative;
	width: ${wp('100%')}px;
	height: ${hp('30%')}px;
	padding-top: ${hp('2%')}px;
	flex-flow:column;
	align-items:center;
	justify-content:center;
`;
