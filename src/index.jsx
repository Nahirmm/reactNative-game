import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { GameStartScreen, GameScreen } from './screens/index';
import { styles } from './styles';
import { Header } from '../src/components/index';
import { theme } from '../src/constants/index';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'Playfair-Italic-Black': require('../assets/fonts/PlayfairDisplay-BlackItalic.ttf'),
    'Playfair-Italic-Bold': require('../assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
    'Playfair-Italic-ExtraBold': require('../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf'),
    'Playfair-Italic-Regular': require('../assets/fonts/PlayfairDisplay-Italic.ttf'),
    'Playfair-Italic-Medium': require('../assets/fonts/PlayfairDisplay-MediumItalic.ttf'),
    'Playfair-Italic-SemiBold': require('../assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const headerTitle = userNumber ? 'Adivina el número!' : 'Bienvenido :)';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Screen = () =>
    userNumber ? (
      <GameScreen userNumber={userNumber} />
    ) : (
      <GameStartScreen onStartGame={onStartGame} />
    );

  return (
    <View style={styles.container}>
      <Header text={headerTitle} />
      <Screen />
    </View>
  );
}
