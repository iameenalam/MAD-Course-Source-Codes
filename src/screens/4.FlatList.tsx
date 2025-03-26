import {
    SafeAreaView,
    Text,
    FlatList,
    Pressable,
    StyleSheet,
  } from 'react-native';
  
  interface Item {
    id: string;
    name: string;
  }
  
  interface Props {
    item: Item;
    onPress: () => void;
  }
  
  const Data: Item[] = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Orange' },
    { id: '3', name: 'Mango' },
  ];
  
  const ListItem = ({ item, onPress }: Props) => (
    <Pressable style={styles.itemstyle} onPress={onPress}>
      <Text style={styles.textStyle}>{item.name}</Text>
    </Pressable>
  );
  
  const FlatListt = () => {
    const renderItem = ({ item }: { item: Item }) => (
      <ListItem
        item={item}
        onPress={() => alert(`You clicked on ${item.name}`)}
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Fruit List</Text>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  };
  
  export default FlatListt;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    itemstyle: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 20,
      borderRadius: 5,
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
  });
  