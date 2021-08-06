import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/Input';
import { styles } from '../styles/login';
import api from '../services/Api';

export function Login({ navigation }) {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    var params = new URLSearchParams();
    params.append('username', matricula);
    params.append('password', password);
    try {
      const response = await api.post('autenticacao/token/', params);
      const { token } = response.data;
      console.log(token)
      const responseUser = await api.get('minhas-informacoes/meus-dados/', {
        headers: {
          'authorization': 'jwt ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log(responseUser.data);
    } catch {
      Alert.alert("Erro na autenticação.");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1DB863" />

      <View style={styles.imgLogo}>
        <Image
          source={require('../img/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.textLogo}>
          IFRN.DO-PDF
        </Text>
      </View>

      <View style={styles.form}>
        <Input placeholder="Matrícula" onChangeText={x => setMatricula(x)} />
        <Input placeholder="Senha" secureTextEntry={true} onChangeText={x => setPassword(x)} />

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textBtn}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}