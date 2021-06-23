import React, { Component } from 'react'
import { View } from 'react-native'
import Display from '../components/Display'
import Button from '../components/Button'

export default class Calculator extends Component{
    render(){
        return(
            <View>
                <Display/>
                <View>
                    <Button/>
                </View>
            </View>
        )
    }
}