import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Jeferson Queiroga </Text>
      <Link href="/tabs/index">
        <Text style={{ color: 'blue' }}>Index</Text>
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
