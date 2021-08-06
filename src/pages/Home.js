import React, { useState, useEffect } from 'react'
import { Keyboard, FlatList, StatusBar } from 'react-native'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Index } from '../components/Index'
import { styles } from '../styles/home';

export default function Home() {
    const keyAsyncStorage = "@blocoNotas:tarefas";
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    async function saveTasks() {
        const data = {
            id: String(new Date().getTime()),
            name: task
        }

        setTasks(oldValue => [...oldValue, data]);
        const vetData = [...tasks, data];
        try {
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
        } catch (error) {
            Alert.alert("erro na gravação de dados");
        }
        Alert.alert("tarefa adicionada");
        setTask("");
    }

    async function deleteTask(id) {
        const data = tasks.filter(item => item.id != id)
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(data))
        setTasks(data)
    }

    async function loadTasks() {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const dados = JSON.parse(retorno);

            setTasks(dados || []);
        } catch (error) {
            Alert.alert("erro no carregamento dos dados");
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#1DB863" />
            <View style={styles.container_header}>
                <Text style={[styles.text, styles.text_title]}>IFRN.DO</Text>
                <Text style={[styles.text, { fontSize: 15 }]}>Você tem <Text style={{ fontWeight: 'bold' }}>{tasks.length} tarefas</Text></Text>
            </View>

            <View style={styles.container_input}>
                <TextInput style={styles.inputText} placeholder='Adicione uma tarefa' onChangeText={setTask} value={task} />
                <TouchableOpacity style={styles.button} onPress={() => saveTasks()} onPressIn={Keyboard.dismiss}>
                    <AntDesign name="right" size={20} color={'gray'} />
                </TouchableOpacity>
            </View>

            <View style={styles.list_tarefas}>
                <FlatList data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Index name={item.name} apagar={() => deleteTask(item.id)} />
                    )}
                />
            </View>
        </View>
    )
}