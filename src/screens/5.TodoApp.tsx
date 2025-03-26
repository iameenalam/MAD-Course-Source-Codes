import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const TodoApp = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>To-do List App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a new todo"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="ADD TODO" onPress={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text style={styles.todoItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});
