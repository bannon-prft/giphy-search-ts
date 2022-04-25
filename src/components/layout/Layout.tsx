import React from 'react'
import Header from './Header'
import styles from './Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
