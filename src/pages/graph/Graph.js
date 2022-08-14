import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryArea,
} from 'victory-native';

const data = [
  {x: 'a', y: 2},
  {x: 'b', y: 3},
  {x: 'c', y: 4},
];

const Graph = () => {
  return (
    <View>
      <Text>Click Me</Text>
      <VictoryBar
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    mutation: ({datum}) => {
                      console.log('eventHandlers', datum);
                    },
                  },
                ];
              },
            },
          },
        ]}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default Graph;
