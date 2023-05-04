import { View } from 'react-native';

import { GameStartScreen } from './screens/index';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <GameStartScreen />
    </View>
  );
}
