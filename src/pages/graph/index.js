import React from 'react';
import {View, Text, Button} from 'react-native';

const index = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Graph Screen</Text>
      <Text>Form: {route.params?.formScreen}</Text>
      <Button
        title="set params formScreen"
        onPress={() =>
          navigation.setParams({
            formScreen: 'Graph Screen',
          })
        }
      />
      <Button
        title="set header navigation"
        onPress={() =>
          navigation.setOptions({
            title: 'navigation',
          })
        }
      />
    </View>
  );
};

export default index;
