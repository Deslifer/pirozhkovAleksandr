import React, {useState} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {styles} from '../styles/lab1Styles';

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

const Lab1 = ({navigation, route}) => {
  const [color, setColor] = useState('#353A45');
  const [counter, setCounter] = useState(0);

  return (
    <ScrollView style={{backgroundColor: color}}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => setColor('#555C70')}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Click me</Text>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor('#353A45')}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Click me too</Text>
          </Neomorph>
        </TouchableOpacity>

        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <Text style={styles.counterText}>{counter}</Text>
          </Neomorph>
        </View>

        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Add some points</Text>
          </Neomorph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <Text style={styles.buttonText}>Subtract some points</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Lab1;
