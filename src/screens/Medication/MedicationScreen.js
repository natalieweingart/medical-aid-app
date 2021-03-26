import React from 'react';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const MedicationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.txtSentence}>
                        This is the Medication
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MedicationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // backgroundColor: 'red'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSentence: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
    },
    menuIcon: {
        // flex: 1,
        top: 5,
        left: 5,
        // height: 50,
        width: 55,
        paddingTop: 2,
        paddingStart: 1,
        // alignItems: 'center',
        position: 'absolute',
        // backgroundColor: 'blue'
    },
})