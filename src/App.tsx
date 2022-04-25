import { Routes, Route, Link } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
