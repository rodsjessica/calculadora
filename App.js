import React from 'react'
import {View, StyleSheet} from 'react-native'
import Calculator from './src/Screens/Calculator'

export default function App(){
    return(
        <View style={styles.container}>
            <Calculator/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'linear-background(to right, rgb(83,105,118), rgb(41, 46, 73))',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25,
    },
});
  