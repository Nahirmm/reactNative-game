import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  textStartGame: {
    marginVertical: 40,
    fontSize: 30,
    textAlign: 'center',
    color: theme.colors.text,
  },
  card: {
    alignItems: 'center',
    padding: 20,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    height: 250,
    marginHorizontal: 20,
  },
  textTitleInput: {
    fontSize: 20,
    marginBottom: 20,
    color: theme.colors.text,
  },
  textInput: {
    fontSize: 20,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    width: 100,
    height: 35,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '70%',
    justifyContent: 'space-around',
  },
  numberConfirmedContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  numberConfirmed: { fontSize: 20 },
});
