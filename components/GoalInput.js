import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderColor: "black", 
        borderBottomWidth: 1, 
        padding: 10
      }
});

export default GoalInput;