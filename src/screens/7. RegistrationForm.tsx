import React from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
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
        <View style={{ padding: 20 }}>
          {/* Name Input */}
          <TextInput
            placeholder="Full Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          {touched.name && errors.name && (
            <Text style={{ color: "red" }}>{errors.name}</Text>
          )}

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          {touched.email && errors.email && (
            <Text style={{ color: "red" }}>{errors.email}</Text>
          )}

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          {touched.password && errors.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}

          {/* Confirm Password Input */}
          <TextInput
            placeholder="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            secureTextEntry
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
          )}

          {/* Submit Button */}
          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
};

export default RegistrationForm;
