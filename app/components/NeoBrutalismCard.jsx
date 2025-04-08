import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function NeoBrutalismCard({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
});