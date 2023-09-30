import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdvertScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Додати об'яву</Text>
      {/* Добавьте ваш контент для профиля здесь */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Цвет фона
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});