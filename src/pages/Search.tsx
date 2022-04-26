import { useLocation } from 'react-router-dom'

import Grid from '../components/ui/Grid'

const Search: React.FC = () => {
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const q: string | null = queryParams.get('q')

  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${q}&limit=50&offset=0&rating=g&lang=en`

  return <Grid url={url} random={false} />
}

export default Search
