import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'
import styles from '../styles/ProductDetails.module.css'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Erro ao carregar os detalhes do produto.')
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="feedback">Carregando...</p>
  if (error) return <p className="feedback error">{error}</p>
  if (!product) return null

  return (
    <main className={styles.details}>
      <Link to="/" className={styles.back}>← Voltar</Link>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h2>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.rating}>
            {'★'.repeat(Math.round(product.rating?.rate ?? 0))}
            {'☆'.repeat(5 - Math.round(product.rating?.rate ?? 0))}
            <span>({product.rating?.count ?? 0} avaliações)</span>
          </div>
          <span className={styles.price}>
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </main>
  )
}
