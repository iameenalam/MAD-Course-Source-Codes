import React from "react";
import { View, TextInput, Button, Text, Alert, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        Alert.alert("Registration Successful", JSON.stringify(values))
      }
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          {/* Heading */}
          <Text style={styles.heading}>Registration Form</Text>

          {/* Name Input */}
          <TextInput
            placeholder="Full Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            style={styles.input}
          />
          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            style={styles.input}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            style={styles.input}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {/* Confirm Password Input */}
          <TextInput
            placeholder="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            secureTextEntry
            style={styles.input}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          {/* Submit Button */}
          <Button
            title="Submit"
            onPress={() => handleSubmit()}
            color="#007BFF"
          />
        </View>
      )}
    </Formik>
  );
};
export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#343a40",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
});
