import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/index';

export function Input({ placeholder }) {

    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.inputs}
                placeholder={placeholder} />
        </View>
    )
}