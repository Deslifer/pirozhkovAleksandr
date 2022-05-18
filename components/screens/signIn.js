import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useMutation} from '@apollo/client';
import {AUTH, UPDATE_USER} from '../gqls/users/mutations';
import {Neomorph} from 'react-native-neomorph-shadows';
import {styles} from '../styles/lab5Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [group, setGroup] = useState(null);
  const [newName, setNewName] = useState(null);
  const [newGroup, setNewGroup] = useState(null);
  const [signed, setSigned] = useState(false);

  const [sign] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      setSigned(true);
      setName(authUser.user.name);
      setGroup(authUser.user.group);
      setNewName(authUser.user.name);
      setNewGroup(authUser.user.group);
      console.log(authUser.token);
      await AsyncStorage.setItem('token', authUser.token);
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const [auth] = useMutation(UPDATE_USER, {
    onCompleted: ({updateUser}) => {
      setName(updateUser.name);
      setGroup(updateUser.group);
      console.log('Yep');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    sign({
      variables: {login, password},
    });
  };
  const edit = () => {
    auth({
      variables: {
        data: {
          group: {set: newGroup},
          name: {set: newName},
        },
      },
    });
  };

  return (
    <View style={styles.main}>
      {!signed && (
        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <TextInput
              onChangeText={text => {
                setLogin(text);
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
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
      {!!signed && (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.buttonText}>Hello {name}</Text>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TextInput
              placeholder={'Name'}
              style={styles.buttonText}
              onChangeText={text => {
                setNewName(text);
              }}>
              {name}
            </TextInput>
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TextInput
              placeholder={'Group'}
              style={styles.buttonText}
              onChangeText={text => {
                setNewGroup(text);
              }}>
              {group}
            </TextInput>
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity onPress={edit}>
              <Text style={styles.buttonText}>Change</Text>
            </TouchableOpacity>
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity
              onPress={() => {
                setSigned(false);
                setLogin(null);
                setPassword(null);
                setName(null);
              }}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
    </View>
  );
};

export default SignIn;
