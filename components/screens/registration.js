import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../gqls/users/mutations';
import {Neomorph} from 'react-native-neomorph-shadows';
import {styles} from '../styles/lab5Styles';

const Registration = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [registrated, setRegistrated] = useState(false);

  const [registrate] = useMutation(REG, {
    onCompleted: () => {
      setRegistrated(true);
      console.log('Регистрация прошла успешно');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Unique constraint failed on the fields: (`login`)') {
        console.log('Такой пользователь уже существует');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    console.log('YES ' + login);
    registrate({
      variables: {login, password, name},
    });
  };
  return (
    <View style={styles.main}>
      {!registrated && (
        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <TextInput
              onChangeText={text => {
                setLogin(text);
                setName(text);
              }}
              placeholder={'Login'}
              style={styles.buttonText}
            />
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={'Password'}
              style={styles.buttonText}
            />
          </Neomorph>

          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity onPress={submit}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
      {!!registrated && (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.buttonText}>
            You have successfully registered!
          </Text>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity
              onPress={() => {
                setRegistrated(false);
              }}>
              <Text style={styles.buttonText}>Register New</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
    </View>
  );
};

export default Registration;
