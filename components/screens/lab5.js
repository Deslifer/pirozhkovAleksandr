import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles/lab5Styles';
import TopTabNavigator from '../routers/TopTabNavigatorLab5';

const Lab5 = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TopTabNavigator />
    </View>
  );
};

export default Lab5;
