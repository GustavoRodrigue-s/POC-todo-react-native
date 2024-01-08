import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16
  },
  title: { 
    fontSize: 32,
    textAlign: 'center',
    marginTop: 24
  },
  controls: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    borderRadius: 4
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    borderRadius: 4,
    fontSize: 18
  }
})