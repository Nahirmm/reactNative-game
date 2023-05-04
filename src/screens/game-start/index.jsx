import { useState } from 'react';
import { Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Header, Card } from '../../components/index';
import { theme } from '../../constants';

const GameStartScreen = () => {
  const [number, setNumber] = useState('');

  const onHandlerChangeText = (text) => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View tyle={styles.container}>
        <Header text="Bienvenido :)" />
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
            <Button title="Borrar" onPress={() => {}} color={theme.colors.secondary} />
            <Button title="Confirmar" onPress={() => {}} color={theme.colors.primary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameStartScreen;
