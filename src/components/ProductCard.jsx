import { Link } from 'react-router-dom'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.footer}>
          <span className={styles.price}>
            ${product.price.toFixed(2)}
          </span>
          <Link to={`/product/${product.id}`} className={styles.btn}>
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}
