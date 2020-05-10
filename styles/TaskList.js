import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'column',
  },
  scrollableView: {
    flex: 1,
  },
  taskInputContainer: {
  	flexDirection: 'row',
  },
  taskInput: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Style