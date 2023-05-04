import { StyleSheet } from 'react-native';

import { theme } from '../../constants/index';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    marginTop: 40,
  },
  text: {
    fontSize: theme.fontSize.header,
    color: theme.colors.title,
  },
});
