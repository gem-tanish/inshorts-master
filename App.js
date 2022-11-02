/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import Context, { NewsContext } from "./API/Context";
import InshortTabs from './components/InshortTabs';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 function App(){
  return<View style={{
    ...styles.container,
    backgroundColor:  "#282C35"
  }}
   
  >
    <InshortTabs />


  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});


export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};