import { useState, useEffect } from 'react'
import api from '../services/api'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Erro ao carregar os produtos.')
        setLoading(false)
      })

    api.get('/products/categories')
      .then(res => setCategories(res.data))
      .catch(() => {})
  }, [])

  const filtered = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  if (loading) return <p className="feedback">Carregando...</p>
  if (error) return <p className="feedback error">{error}</p>

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h2>Produtos em Destaque</h2>
        <p>Confira nossa seleção de produtos incríveis</p>
      </section>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${!selectedCategory ? styles.filterBtnActive : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          Todos
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
