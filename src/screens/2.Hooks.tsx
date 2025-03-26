import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <View style={styles.spacing} />
      <Button title="Reset Count" onPress={() => setCount(0)} />
    </View>
  );
};

export default Hooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  spacing: {
    marginVertical: 5,
  },
});
