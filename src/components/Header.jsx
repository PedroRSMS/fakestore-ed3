import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          <span className={styles.icon}>✦</span>
          <h1>FakeStore</h1>
        </Link>
      </div>
    </header>
  )
}
