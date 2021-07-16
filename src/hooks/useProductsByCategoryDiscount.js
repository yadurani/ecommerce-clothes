import { useEffect, useState } from 'react';
import { getProductsDiscount } from '../api/repository';

const useProductsByCategoryDiscount = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data : { results } }  = await getProductsDiscount()
      setData(results)
    } catch {
      setError('Hubo un error, intentelo nuevamente')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, error, loading }
}

export default useProductsByCategoryDiscount
