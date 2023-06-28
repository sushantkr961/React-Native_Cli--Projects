import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import style from './style';

let name = 'Sushant Kumar Sonu';
const App = () => {
  let lols = val => {
    console.warn(val);
  };

  return (
    <View>
      <Text style={style.textBox}>Hello React Native</Text>
      <Text style={style.textBox2}>Hello {name}</Text>
      <Button title="Click Me" color="green" onPress={() => lols('hello')} />
      <Button title="Hit Me" style={style.buttonSet} />
    </View>
  );
};

// const style = StyleSheet.create({
//   textBox: {
//     fontSize: 30,
//     backgroundColor: 'blue',
//     padding: 10,
//   },
//   textBox2: {
//     fontSize: 20,
//     backgroundColor: 'pink',
//     padding: 15,
//     textAlign: 'center',
//   },
// });

export default App;
