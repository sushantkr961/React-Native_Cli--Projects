/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';

const Lap = () => {
  const [Lapdata, setLapData] = useState(['06:30:48', '06:30:48']);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lap Time</Text>
        <Text style={styles.titleText}>Lap</Text>
      </View>
      <FlatList
        data={Lapdata}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={{color: 'white'}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: colors.color4,
    paddingVertical: 10,
  },
  titleText: {
    color: colors.color5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
