import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../resource/profile-picture.png')}
        style={styles.profilePicture}
      />
      <Text style={styles.username}>Пітнічук Ярослав</Text>
      <Text style={styles.rating}>5 ☆</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});
