import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, Image, Button, TextInput, SectionList, Pressable } from 'react-native';

export default function App(props) {
  const { onPress, title = 'Save' } = props;

  const Separator = () => <View style={styles.separator} />;

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );

  const DATA = [
    {
      data: ['React Native', 'Vue JS', 'TypeScript']
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style='auto' /> */}

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Learning Goals</Text>
        </View>

        <View>
          <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' }} />
        </View>

        <View style={styles.row}>
          <TextInput style={styles.input} placeholder='Your course goal'></TextInput>
          <Button styles={styles.button} title='Add Goal' accessibilityLabel='Add a course goal to your list'></Button>
        </View>

        <Separator />

        <View>
          <Text>List of goals ...</Text>
        </View>

        <Separator />

        <View>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        </View>

        <SectionList sections={DATA} keyExtractor={(item, index) => item + index} renderItem={({ item }) => <Item title={item} />} />
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
    marginTop: 20,
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
    marginVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0bb2ea'
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  separator: {
    margin: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%'
  },
  item: {
    flex: 1,
    backgroundColor: '#0bb2ea',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center'
  },
  itemText: {
    color: '#fff'
  }
});
