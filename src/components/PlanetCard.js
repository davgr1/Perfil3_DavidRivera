import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../config/theme';

export default function PlanetCard({ planet }) {
  const [expanded, setExpanded] = useState(false);
  const destroyed = planet.isDestroyed;

  return (
    <Pressable style={styles.card} onPress={() => setExpanded((v) => !v)}>
      <Image source={{ uri: planet.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>{planet.name}</Text>
          <View style={[styles.badge, { backgroundColor: destroyed ? COLORS.danger : COLORS.success }]}>
            <Text style={styles.badgeText}>{destroyed ? 'Destruido' : 'Intacto'}</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={expanded ? undefined : 3}>
          {planet.description}
        </Text>
        <Text style={styles.more}>{expanded ? 'Ver menos ▲' : 'Ver más ▼'}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    marginBottom: SPACING.md,
  },
  image: { width: '100%', height: 170, backgroundColor: COLORS.surfaceAlt },
  body: { padding: SPACING.md },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name: { color: COLORS.text, fontSize: 19, fontWeight: '700', flex: 1, marginRight: SPACING.sm },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  badgeText: { color: '#111', fontSize: 12, fontWeight: '700' },
  description: { color: COLORS.textMuted, fontSize: 14, lineHeight: 20, marginTop: SPACING.sm },
  more: { color: COLORS.primary, fontSize: 13, fontWeight: '600', marginTop: SPACING.sm },
});
