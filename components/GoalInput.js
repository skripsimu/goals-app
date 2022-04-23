import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [goalText, setGoalText] = useState('');

    function goalInputHanlder(enteredText) {
        setGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHanlder}
                    value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Add Goal' onPress={addGoalHandler} color='#094ACD' /></View>
                    <View style={styles.button}><Button title='Cancel' onPress={props.onCancel} color='#789FD2' /></View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#178ADC'
    },
    image: {
        height: 100,
        width: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        borderColor: 'white',
        backgroundColor: 'white',
        color: '#120438',
        height: 70,
        borderRadius: 6,
        width: '100%',
        padding: 16,
        fontSize: 18
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    }
});