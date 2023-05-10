import { useState } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants';

const maxNumber = 99;
const minNumber = 1;

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minNumber, maxNumber, userNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Text style={styles.title}>Adivina el número</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" color={theme.colors.primary} onPress={() => {}} />
          <Button title="Mayor" color={theme.colors.primary} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
