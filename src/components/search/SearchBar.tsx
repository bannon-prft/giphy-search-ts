import { useNavigate } from 'react-router-dom'
import styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
  const navigate = useNavigate()

  const submitHandler = () => {
    navigate('/search')
  }

  return (
    <form className={styles.searchForm} onSubmit={submitHandler}>
      <input className={styles.searchInput} autoFocus />
      <button className={styles.searchButton}>Search</button>
    </form>
  )
}

export default SearchBar
