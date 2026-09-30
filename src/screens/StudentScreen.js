import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { STUDENT } from '../config/student';
import { COLORS, RADIUS, SPACING } from '../config/theme';

export default function StudentScreen({ navigation }) {
  const initials = STUDENT.nombre.split(' ').slice(0, 2).map((p) => p[0]).join('');

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <Text style={styles.title}>Información del estudiante</Text>

          <InfoRow icon="👤" label="Nombre" value={STUDENT.nombre} />
          <InfoRow icon="🪪" label="Carnet" value={STUDENT.carnet} />
          <InfoRow icon="🏫" label="Sección y grupo" value={STUDENT.seccionGrupo} />
        </View>

        <PrimaryButton title="Ver planetas de Dragon Ball  →" onPress={() => navigation.navigate('Planets')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1, padding: SPACING.lg, justifyContent: 'space-between' },
  card: { backgroundColor: COLORS.surface, borderRadius: RADIUS.lg, padding: SPACING.lg, marginTop: SPACING.md },
  avatar: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: SPACING.md,
  },
  avatarText: { fontSize: 32, fontWeight: '800', color: '#1A1A1A' },
  title: { color: COLORS.text, fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: SPACING.lg },
});
