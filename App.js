import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Linking, DeviceEventEmitter, PermissionsAndroid, AppState } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message"



import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';


export default function App()
{
  // 

  return (
    <SafeAreaProvider>
    {/* <Provider store={store}> */}
      <NavigationContainer>
        {/* <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
        </PersistGate> */}
          <AppView />
      </NavigationContainer>
      <FlashMessage position="center" />
    {/* </Provider> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
