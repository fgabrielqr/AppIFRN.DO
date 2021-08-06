import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons'
import { styles } from '../styles/home';

export function Index(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container_index}>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.tarefa}>{props.name}</Text>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button_index} onPress={props.apagar}>
                    <Icon name="trash" size={30} color='gray' />
                </TouchableOpacity>
            </View>
        </View>
    )
}