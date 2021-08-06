import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container_header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1DB863',
        width: '100%',
        height: 150,
    },
    text: {
        marginTop: 50,
        color: '#FFFFFF'
    },
    text_title: {
        fontWeight: '700',
        fontSize: 24,
    },
    container_input: {
        margin: -30,
        width: '90%',
        height: 65,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    inputText: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        color: 'gray',
        fontSize: 17,

    },
    button: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth: 1,
        borderLeftColor: 'gray',
    },
    list_tarefas: {
        marginTop: 40,
        alignItems: 'center',
    },
    container_index: {
        marginTop: 15,
        width: 320,
        height: 50,
        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    tarefa: {
        fontSize: 17,
    },

    button_index: {
        padding: 10,
        marginRight: 15
    },
    checkbox: {
        marginLeft: 30,
        marginRight: 2
    }
});