import { useCallback, useEffect, useState } from 'react';
import { ENDPOINTS, PAGE_LIMIT } from '../config/api';

/**
 * Hook que consume https://dragonball-api.com/api/planets con paginación.
 * La API responde: { items: [...], meta: { totalPages, currentPage, ... }, links: {...} }
 */
export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(async (pageToLoad, mode = 'initial') => {
    try {
      if (mode === 'initial') setLoading(true);
      if (mode === 'more') setLoadingMore(true);
      if (mode === 'refresh') setRefreshing(true);
      setError(null);

      const res = await fetch(`${ENDPOINTS.planets}?page=${pageToLoad}&limit=${PAGE_LIMIT}`);
      if (!res.ok) throw new Error(`Error ${res.status} al consultar la API`);
      const data = await res.json();

      const items = data.items ?? [];
      setPlanets((prev) => (pageToLoad === 1 ? items : [...prev, ...items]));
      setPage(data.meta?.currentPage ?? pageToLoad);
      setTotalPages(data.meta?.totalPages ?? 1);
    } catch (e) {
      setError(e.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(1);
  }, [fetchPage]);

  const loadMore = () => {
    if (!loadingMore && !loading && page < totalPages) fetchPage(page + 1, 'more');
  };

  const refresh = () => fetchPage(1, 'refresh');
  const retry = () => fetchPage(1);

  return { planets, loading, loadingMore, refreshing, error, loadMore, refresh, retry, hasMore: page < totalPages };
}
