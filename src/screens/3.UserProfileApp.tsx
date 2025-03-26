import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface UserProfileProps {
  name: string;
  age: number;
  updateName: (newName: string) => void;
  updateAge: (newAge: number) => void;
}

const UserProfile = ({ name, age, updateName, updateAge }: UserProfileProps) => {
  const [newName, setNewName] = useState(name);

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <TextInput
        placeholder="Enter new name"
        value={newName}
        onChangeText={setNewName}
        style={styles.input}
      />
      <Button title="Update Name" onPress={() => updateName(newName)} />
      <View style={styles.spacing} />
      <Button title="Increase Age" onPress={() => updateAge(age + 1)} />
    </View>
  );
};

const UserProfileApp = () => {
  const [name, setName] = useState('Ahmad');
  const [age, setAge] = useState(25);

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>User Profile App</Text>
      <UserProfile
        name={name}
        age={age}
        updateName={setName}
        updateAge={setAge}
      />
    </View>
  );
};

export default UserProfileApp;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    width: 200,
    marginVertical: 10,
  },
  spacing: {
    marginVertical: 5,
  },
});
