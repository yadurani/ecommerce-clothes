import { useEffect, useState } from 'react';
import { searchProduct } from '../api/repository';

const useSearchByCategory = (query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchResultsSearch = async () => {
    try {
      const { data: { results } } = await searchProduct(query)
      setData(results)
    } catch {
      setError('Error intentelo nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchResultsSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { data, error, loading }
}

export default useSearchByCategory
