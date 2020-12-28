import Styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Layout = Styled.SafeAreaView`
	display:flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #FFFFFF;
`;
export const Header = Styled.View`
	display:flex;
	width:${wp('100%')}px;
	height:${hp('40%')}px;
	padding-horizontal:30px;
	justify-content: center;
	align-items: center;
	color:#FFFFFF;
	font-size:32px;
`;
export const Description = Styled.View`
	flex:1;
	display:flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: flex-start;
	background-color: #FFFFFF;
`;
