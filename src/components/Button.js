import React from 'react'
import {
    Text, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'

export default (props) => {
    const stylesButton = [styles.main]

    if(props.operation) stylesButton.push(styles.operation)
    if(props.twoCollums) stylesButton.push(styles.twoCollums)
    if(props.threeCollums) stylesButton.push(styles.threeCollums)

    return (
        <TouchableOpacity onPress={() => props.onTouch(props.label)}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
    main:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#888'
    },
    operation: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    twoCollums: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    threeCollums: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})