import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/about">
        <Text style={{ color: 'blue' }}>Go to About Page</Text>
      </Link>
      <Link href="/teste">
        <Text style={{ color: 'blue' }}>Teste</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
