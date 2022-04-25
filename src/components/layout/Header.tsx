import React from 'react'

import SearchBar from '../search/SearchBar'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>GIPHY Search (in TypeScript)</h1>
      <SearchBar />
    </header>
  )
}

export default Header
