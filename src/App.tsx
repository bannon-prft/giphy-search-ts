import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </main>
  )
}

export default App
