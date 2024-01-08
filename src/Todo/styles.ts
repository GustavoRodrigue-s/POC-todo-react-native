import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  contaner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: "rgba(50, 50, 50, 0.4)",
    borderRadius: 4,
    paddingLeft: 16,
    overflow: 'hidden',
    flex: 1
  },
  text: {
    flex: 1,
    paddingVertical: 12
  },
  button: {
    padding: 16,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: "rgb(50, 50, 50)",
  }
})