import { useRef } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const submitHandler = (event: any) => {
    event.preventDefault()

    const enteredText = inputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        q: enteredText
      })}`
    })
  }

  return (
    <form className={styles.searchForm} onSubmit={submitHandler}>
      <input className={styles.searchInput} ref={inputRef} autoFocus />
      <button className={styles.searchButton}>Search</button>
    </form>
  )
}

export default SearchBar
