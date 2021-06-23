import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default (props) => {
    return(
        <View style={styles.display}>
            <Text>
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },

})