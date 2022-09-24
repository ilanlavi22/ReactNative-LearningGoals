import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>My First App yea</Text>
      <StatusBar style='auto' />

      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Button title='Learn More'></Button>
        <TextInput style={styles.input} placeholder='Your Name'></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  red: {
    color: 'red'
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc'
  }
});
