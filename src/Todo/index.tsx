import { Button, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface TodoProps {
  text: string;
  onDelete: () => void;
}

export const Todo: React.FC<TodoProps> = ({ text, onDelete }) => (
  <View style={styles.contaner}>
    <Text style={styles.text}>{text}</Text>
    <TouchableOpacity onPress={onDelete} style={styles.button}>
      <Text>🗑️</Text>
    </TouchableOpacity>
  </View>
)