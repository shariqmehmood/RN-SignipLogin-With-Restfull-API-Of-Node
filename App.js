

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './Src/Config/Navigation';


const App = () => {

  return (
    <>
      <Navigation />
      <StatusBar />

    </>
  );
};

export default App;
