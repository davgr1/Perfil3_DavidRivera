import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SPACING } from '../config/theme';
import PrimaryButton from './PrimaryButton';

export default function ErrorView({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⚠️</Text>
      <Text style={styles.text}>{message}</Text>
      <PrimaryButton title="Reintentar" onPress={onRetry} style={{ alignSelf: 'stretch' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: SPACING.xl, backgroundColor: COLORS.background,
  },
  emoji: { fontSize: 40, marginBottom: SPACING.md },
  text: { color: COLORS.text, textAlign: 'center', marginBottom: SPACING.lg },
});
