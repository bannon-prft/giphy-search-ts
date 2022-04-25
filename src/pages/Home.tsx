import Grid from '../components/ui/Grid'

const Home: React.FC = () => {
  const url: string = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_KEY}&tag=&rating=g`

  return <Grid url={url} random />
}

export default Home
