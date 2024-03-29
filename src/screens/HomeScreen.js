import React from 'react';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.txtHeader}>
                        HOME
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

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
    txtHeader: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        color: 'black',
    },

})