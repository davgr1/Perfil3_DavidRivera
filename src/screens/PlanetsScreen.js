import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ErrorView from '../components/ErrorView';
import Loader from '../components/Loader';
import PlanetCard from '../components/PlanetCard';
import { COLORS, SPACING } from '../config/theme';
import usePlanets from '../hooks/usePlanets';

export default function PlanetsScreen() {
  const { planets, loading, loadingMore, refreshing, error, loadMore, refresh, retry, hasMore } = usePlanets();

  if (loading) return <Loader message="Cargando planetas..." />;
  if (error && planets.length === 0) return <ErrorView message={error} onRetry={retry} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={planets}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PlanetCard planet={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.4}
      refreshing={refreshing}
      onRefresh={refresh}
      ListHeaderComponent={
        <Text style={styles.header}>{planets.length} planetas cargados · desliza para ver más</Text>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          {loadingMore && <ActivityIndicator color={COLORS.primary} />}
          {!hasMore && <Text style={styles.footerText}>No hay más planetas</Text>}
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  header: { color: COLORS.textMuted, marginBottom: SPACING.md },
  footer: { paddingVertical: SPACING.lg, alignItems: 'center' },
  footerText: { color: COLORS.textMuted },
});
