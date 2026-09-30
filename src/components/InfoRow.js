import { StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../config/theme';

export default function InfoRow({ label, value, icon }) {
  return (
    <View style={styles.row}>
      <Text style={styles.icon}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  icon: { fontSize: 22, marginRight: SPACING.md },
  label: { color: COLORS.textMuted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 },
  value: { color: COLORS.text, fontSize: 17, fontWeight: '600', marginTop: 2 },
});
