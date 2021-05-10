import React from 'react';
import {
    View, Text, StyleSheet,
    TouchableOpacity, SafeAreaView
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';

const ViewCall = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Card style={styles.itemCard}>
                    <Card.Content>
                        <Title>{route.params.name}</Title>
                        <Subheading>
                            {route.params.instructions}
                            {'\n'}
                            {route.params.time} | {route.params.dosage}
                        </Subheading>
                    </Card.Content>
                    <Card.Actions style={styles.cardBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => console.log('EDIT CLICKED')}>
                            <Text style={styles.btnTxt}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => console.log('DELETE CLICKED')}>
                            <Text style={styles.btnTxt}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btnTxt}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ViewCall;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 16,
        // backgroundColor: 'purple',
    },

    itemCard: {
        marginTop: 20,
        paddingHorizontal: '10%',
        // height: '30%',
        maxHeight: 200,
        // width: 400,
        // backgroundColor: 'blue'
    },
    cardBtn: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btn: {
        margin: '10%',
        marginTop: '5%',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#77A8AB',
        // width: 250,
        // height: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
});