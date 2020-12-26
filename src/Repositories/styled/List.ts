import Styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ScrollingList = Styled.View`
	flex:1;
	flex-basis: ${hp('20%')}px;
	flex-grow:1;
	background-color: #FFFFFF;
`;

export const FooterContainer = Styled.View`
	flex:1;
	height: 100px ;
	justify-content:center;
	align-items:center;
`;
