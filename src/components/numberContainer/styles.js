import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  numberContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
