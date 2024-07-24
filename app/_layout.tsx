import { Slot } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My App Header</Text>
      <Slot />
      <Text style={styles.footer}>My App Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    padding: 10,
    marginTop: 50,
    backgroundColor: '#ddd',
    width: '100%',
    textAlign: 'center',
  },
  footer: {
    fontSize: 16,
    padding: 10,
    marginBottom: 50,
    backgroundColor: '#ddd',
    width: '100%',
    textAlign: 'center',
  },
});
