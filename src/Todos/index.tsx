import { TouchableOpacity, FlatList, TextInput, View, Text } from 'react-native';

import { styles } from './styles';

import { Todo } from '../Todo';
import { useTodos } from './useTodos';

export const Todos: React.FC = () => {
  const { todoText, todos, setTodoText, handleAdd, handleDelete } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List ({todos.length})</Text>

      <FlatList 
        data={todos}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Todo 
            text={item.text} 
            onDelete={() => handleDelete(item.id)} 
          />
        )}
      />

      <View style={styles.controls}>
        <TextInput  
          style={styles.input}
          placeholder='ex: limpar a casa, estudar...'
          value={todoText}
          onChangeText={setTodoText}
        />
        <TouchableOpacity 
          onPress={handleAdd}
          style={styles.button}
        >
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}