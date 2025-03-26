import { View, Text, StyleSheet, Image } from "react-native";

// Method 1:
interface GreetingProps {
  name: string;
}
const Greeting2 = ({ name }: GreetingProps) => {
  return <Text style={styles.textStyling}>Greetings {name}</Text>;
};

// Method 2:
const Greeting = (props: any) => {
  return <Text style={styles.textStyling}>Greetings {props.name}</Text>;
};

const Props = () => {
  return (
    <View style={styles.container}>
      <Greeting name="John" />
      <Image
        source={{
          uri: "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png",
        }}
        style={styles.imageStyling}
      />
    </View>
  );
};

export default Props;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyling: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageStyling: {
    width: 150,
    height: 150,
  },
});
