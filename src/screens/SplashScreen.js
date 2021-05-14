import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  return (
    <View style={styles.center}>
      <LinearGradient
        // Background Linear Gradient
        // colors={['rgba(0,0,0,0.8)', 'transparent']}
        colors={['#97D5B3', '#77A8AB']}
        style={styles.background}
      />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    color: 'white',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
});