import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import Display from '../components/Display'
import Button from '../components/Button'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    addDigit = (digit) => {
        const clearDisplay = this.state.displayValue = '0'
            || this.state.clearDisplay

        if (digit == '.'
            && this.state.displayValue.includes('.')) {
            Alert.alert(
                "Atenção",
                "Não é possivel adicionar mais um ponto",
                [
                    {
                        text: "Entendi",
                        onPress: () => false,
                        style: "cancel",
                    },
                ]
            );
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit

        this.setState({ displayValue, clearDisplay: false })

        if (digit != '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({ values })
        }

    }

    setOperation = operation => {
        if (this.state.current == 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
            return
        }

        const equals = operation == '='
        const currentOperation = this.state.operation
        const values = [...this.state.values]

        switch (currentOperation) {
            case '+':
                values[0] += values[1]
                break
            case '-':
                values[0] -= values[1]
                break
            case '*':
                values[0] *= values[1]
                break
            case '/':
                values[0] /= values[1]
                break
        }

        values[1] = 0

        this.setState({
            displayValue: values[0],
            operation: equals ? null : operation,
            values: [...values],
            current: equals ? 0 : 1,
            clearDisplay: true
        })

    }


    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label='AC' onTouch={this.clearMemory} threeColumns />
                    <Button label='/' onTouch={this.setOperation} operation />
                    <Button label='7' onTouch={this.addDigit} />
                    <Button label='8' onTouch={this.addDigit} />
                    <Button label='9' onTouch={this.addDigit} />
                    <Button label='*' onTouch={this.setOperation} operation />
                    <Button label='4' onTouch={this.addDigit} />
                    <Button label='5' onTouch={this.addDigit} />
                    <Button label='6' onTouch={this.addDigit} />
                    <Button label='-' onTouch={this.setOperation} operation />
                    <Button label='1' onTouch={this.addDigit} />
                    <Button label='2' onTouch={this.addDigit} />
                    <Button label='3' onTouch={this.addDigit} />
                    <Button label='+' onTouch={this.setOperation} operation />
                    <Button label='0' twoCollumns />
                    <Button label='.' onTouch={this.addDigit} />
                    <Button label='=' onTouch={this.setOperation} operation />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})