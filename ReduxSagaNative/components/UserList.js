/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './store/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  // console.warn('in laura', userList);

  return (
    <View>
      {userList.length
        ? userList.map((user, idx) => (
            <View key={idx}>
              <Text>{user.first_name}</Text>
              <Text>{user.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
