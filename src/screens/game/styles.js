import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },
  cardContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
