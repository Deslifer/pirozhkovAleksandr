import React, {useEffect} from 'react';
import axios from 'axios';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lab1 from '../screens/lab1';
import Lab2 from '../screens/lab2';
import Lab3 from '../screens/lab3';
import Lab4 from '../screens/lab4';
import Lab5 from '../screens/lab5';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {loadItems} from '../../store/album';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#353A45',
    height: 60,
    width: 390,
    alignSelf: 'center',
    marginLeft: 14,
    marginRight: 14,
  },
  tabItem: {
    margin: 5,
    height: 47,
    borderRadius: 35,
    borderColor: '#9E00FF',
    borderWidth: 3,
  },
  tabLabel: {
    width: '100%',
    alignSelf: 'center',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FDD400',
    height: 47,
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily: 'chakraPetchBold',
  },
});

const TopTabNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const randImage = async () => {
      if (dispatch) {
        const response = await axios('https://picsum.photos/v2/list');
        dispatch(loadItems(response.data));
      }
    };
    randImage();
  }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarStyle: styles.tabBar,
      }}
      style={{backgroundColor: '#353A45'}}>
      <Tab.Screen name="Lab5" component={Lab5} />
      <Tab.Screen name="Lab4" component={Lab4} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab1" component={Lab1} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
