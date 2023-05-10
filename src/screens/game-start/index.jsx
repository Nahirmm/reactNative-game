import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components/index';
import { theme } from '../../constants';

const GameStartScreen = ({ onStartGame }) => {
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [numberSelected, setNumberSelected] = useState(null);

  const onHandlerChangeText = (text) => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const convertNumber = Number(number);
    if (isNaN(convertNumber) || convertNumber <= 0 || convertNumber > 100) {
      Alert.alert('Número inválido', 'El número ingresado debe ser entre 1 y 99', [
        { text: 'Aceptar', style: 'destructive', onPress: () => setNumber('') },
      ]);
    } else {
      setConfirmed(true);
      setNumberSelected(convertNumber);
      setNumber('');
    }
  };

  const onHandlerReset = () => {
    setNumber('');
    setConfirmed(false);
    setNumberSelected(null);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.numberConfirmedContainer}>
        <Text style={styles.numberConfirmed}>Número seleccionado</Text>
        <NumberContainer number={numberSelected} />
        <Button title="Comenzar" onPress={onHandlerStartGame} color={theme.colors.primary} />
      </Card>
    ) : null;

  const onHandlerStartGame = () => {
    onStartGame(numberSelected);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View tyle={styles.container}>
        <Text style={styles.textStartGame}>Estás listo para jugar?</Text>
        <Card style={styles.card}>
          <Text style={styles.textTitleInput}>Escriba un número del 1 al 99</Text>
          <TextInput
            placeholder="1"
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            value={number}
            onChangeText={onHandlerChangeText}
          />
          <View style={styles.buttonsContainer}>
            <Button title="Borrar" onPress={onHandlerReset} color={theme.colors.secondary} />
            <Button
              title="Confirmar"
              onPress={onHandlerConfirm}
              color={theme.colors.primary}
              disabled={number === ''}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameStartScreen;
