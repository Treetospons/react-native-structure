/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import config from './src/constants/config';
import  Navigations from './src/navigations';
const App: () => Node = () => {
  return <Navigations />;
};

export default App;
