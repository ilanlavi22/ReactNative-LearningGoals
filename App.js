import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setInputText(enteredText);
  };

  const addGoalHandler = () => {
    if (inputText) {
      setGoals((currentGoal) => [
        ...currentGoal,
        { key: new Date().getTime().toString(), title: inputText }
      ]);
    }
  };
  const handleDelete = (key) => {
    //const filterGoals = goals.filter((goal) => id !== goal.id);
    setGoals(goals.filter((goal) => key !== goal.key));
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Learning Goals</Text>
        </View>

        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
            }}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder='Your course goal'
            onChangeText={goalInputHandler}></TextInput>
          <Button
            styles={styles.button}
            title='Add Goal'
            accessibilityLabel='Add a course goal to your list'
            onPress={addGoalHandler}></Button>
        </View>

        <Separator />

        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={(goalData) => {
              const { key, title } = goalData.item;
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{title}</Text>
                  <Button
                    onPress={() => handleDelete(key)}
                    style={styles.btnDelete}
                    title='delete'></Button>
                </View>
              );
            }}
            alwaysBounceVertical={false}
          />
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
    marginRight: 10,
    paddingHorizontal: 4
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
  goalContainer: {
    flex: 4,
    width: '100%'
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#418BDF',
    paddingHorizontal: 8,
    paddingVertical: 1,
    marginVertical: 6,
    marginRight: 10,
    borderRadius: 6
  },
  goalText: {
    color: '#fff'
  }
});
