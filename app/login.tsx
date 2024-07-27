import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <Link href="(tab)">
        <Text style={{ color: 'blue' }}>Entrar</Text>
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
