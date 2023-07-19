/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../utilities/style';

const {height, width} = Dimensions.get('screen');

const Clock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
        <Text style={{color: colors.color5}}>STOPWATCH</Text>
        <View style={styles.counterContainer}>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>10</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>10</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
          <View style={styles.counterInnerContainer}>
            <Text style={styles.timeText}>10</Text>
            <Text style={{color: colors.color5, opacity: 0.7}}>min</Text>
          </View>
        </View>
        <View>
          <Text>Active Now</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContainer: {
    backgroundColor: colors.color4,
    height: width - 100,
    width: width - 100,
    borderRadius: width - 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  timeText: {
    fontSize: 30,
    color: colors.color5,
  },
  counterInnerContainer: {
    alignItems: 'center',
  },
});

export default Clock;
