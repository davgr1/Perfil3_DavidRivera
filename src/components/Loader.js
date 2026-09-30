import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../config/theme';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.background },
  text: { color: COLORS.textMuted, marginTop: 12 },
});
