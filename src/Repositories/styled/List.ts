import Styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ScrollingList = Styled.View`
	flex-basis: ${hp('60%')}px;
`;

export const FooterContainer = Styled.View`
	flex:1;
	height: 100px ;
	justify-content:center;
	align-items:center;
`;
