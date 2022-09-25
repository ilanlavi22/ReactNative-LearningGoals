import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, Image, Button, TextInput, Pressable } from 'react-native';

export default function App(props) {
  const { onPress, title = 'Save' } = props;

  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>My First App yea</Text>
        </View>

        <View>
          <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' }} />
        </View>

        <View style={styles.row}>
          <TextInput style={styles.input} placeholder='Your Name'></TextInput>
          <Button styles={styles.button} title='Learn More' accessibilityLabel='Learn more about this purple button'></Button>
        </View>

        <Separator />

        <View>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    // marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    alignSelf: 'center'
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderWidth: 2,
    flex: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8BA802'
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  separator: {
    marginVertical: 50,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%'
  }
});
