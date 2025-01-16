import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (input) => {
    if (input === '=') {
      try {
        setResult(eval(display));
      } catch {
        setResult('Error');
      }
    } else if (input === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + input);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {['7', '8', '9', '/'].map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handleInput(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '*'].map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handleInput(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['1', '2', '3', '-'].map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handleInput(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['0', '.', 'C', '+'].map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handleInput(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={() => handleInput('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Calc by Esha Govardhan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  display: { fontSize: 36, height: 50, textAlign: 'right', width: '80%', marginBottom: 10 },
  result: { fontSize: 24, height: 30, textAlign: 'right', width: '80%', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  button: { backgroundColor: '#ddd', padding: 20, margin: 5, width: 70, alignItems: 'center' },
  buttonText: { fontSize: 24 },
  equalsButton: { backgroundColor: 'green' },
  footer: { marginTop: 20, fontSize: 16 },
});
