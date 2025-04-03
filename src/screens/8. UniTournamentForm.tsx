import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";

const UniTournamentForm = () => {
  const sports = ["Football", "Basketball", "Tennis", "Cricket", "Badminton"];

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    studentID: Yup.string()
      .matches(/^\d+$/, "Student ID must be numeric")
      .required("Student ID is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    sport: Yup.string().required("Please select a sport"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        University Sports Tournament Registration
      </Text>
      <Formik
        initialValues={{ fullName: "", studentID: "", email: "", sport: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          Alert.alert(
            "Registration Successful",
            JSON.stringify(values, null, 2)
          )
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Student ID"
              keyboardType="numeric"
              onChangeText={handleChange("studentID")}
              onBlur={handleBlur("studentID")}
              value={values.studentID}
            />
            {touched.studentID && errors.studentID && (
              <Text style={styles.error}>{errors.studentID}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Picker
              selectedValue={values.sport}
              onValueChange={(itemValue) => setFieldValue("sport", itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Sport" value="" />
              {sports.map((sport, index) => (
                <Picker.Item key={index} label={sport} value={sport} />
              ))}
            </Picker>
            {touched.sport && errors.sport && (
              <Text style={styles.error}>{errors.sport}</Text>
            )}

            <Button title="Submit" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
};
export default UniTournamentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
