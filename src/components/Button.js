import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default (props) => {
    const stylesButton = [styles.main]
    return(
      <TouchableOpacity>
          <Text style={stylesButton}>0</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main:{
        fontSize: 45,
        backgroundColor: '#f0f0f0'
    }
})