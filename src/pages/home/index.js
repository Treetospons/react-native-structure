import React from 'react';
import {View, Text, Button} from 'react-native';

const index = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to graph"
        onPress={() =>
          navigation.navigate('GraphScreen', {
            formScreen: 'Home screen',
          })
        }
      />
    </View>
  );
};

export default index;
