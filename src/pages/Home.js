import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/Input';
import { styles } from '../styles/index';

export function Home({ navigation }) {
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
          IFRN - Pau dos Ferros
        </Text>
      </View>

      <View style={styles.form}>
        <Input style={styles.input} placeholder="Login" />
        <Input style={styles.input} placeholder="Senha" />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}