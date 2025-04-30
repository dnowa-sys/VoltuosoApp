import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;