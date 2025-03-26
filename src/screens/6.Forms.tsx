import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Forms = () => {
  const [currency, setCurrency] = useState('PKR');
  const [experience, setExperience] = useState(50);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View>
        <Text style={styles.heading}>Forms in React-Native</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          secureTextEntry={false}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />

        <View>
          <Picker
            selectedValue={currency}
            onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
            style={styles.picker}>
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="PKR" value="PKR" />
          </Picker>
        </View>
        <Text> Selected Currency: {currency}</Text>

        <Text style={{ marginTop: 15 }}>Experience Level: {experience}</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={experience}
          onValueChange={(value) => setExperience(value)}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          thumbTintColor="green"
        />
      </View>
    </SafeAreaView>
  );
};

export default Forms;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  textInput: {
    fontSize: 15,
    marginBottom: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#333',
  },
  picker: {
    height: 50,
  },
});
