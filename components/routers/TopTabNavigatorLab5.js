import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';
import SignIn from '../screens/signIn';
import Registration from '../screens/registration';

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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarStyle: styles.tabBar,
      }}
      style={{backgroundColor: '#353A45'}}>
      <Tab.Screen name="Sign in" component={SignIn} />
      <Tab.Screen name="Registration" component={Registration} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
