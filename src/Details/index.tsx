import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getLang } from '../Repositories/Repository';
import { DetailsScreenRouteProp } from '../types';
import { Layout, Header } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import Repository from './Repository';

const DetailScreen = (): JSX.Element | null => {
    const route: DetailsScreenRouteProp = useRoute();
    const { item } = route.params;
    if (!item) return null;
    const languageName = getLang(item);
    return (
        <Layout>
            <Header>
                <LinearGradient
                    start={{ x: 0.1, y: 0.2 }}
                    colors={[item.primaryLanguage?.color, '#8822DD']}
                    style={styles.background}
                />
                <View style={{ width: 100 }}>
                    <MaterialCommunityIcons name={languageName as any} size={100} color={'#FFFFFF'} />
                </View>
                <Text h1 style={{ paddingBottom: 10, color: '#ffffff' }}>
                    {item.name}
                </Text>
                <Text style={{ fontSize: 18, color: '#ffffff' }}>{item.description}</Text>
            </Header>
            <Repository name={item.name} />
        </Layout>
    );
};
DetailScreen.navigationOptions = {
    title: 'Repo Details',
};
// DetailScreen.sharedElements = (route: any, otherRoute: any, showing: any) => {
//     const { item } = route.params;
//     return [{ id: 'repo' + item.id, animation: 'move' }];
// };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
});

export default DetailScreen;
