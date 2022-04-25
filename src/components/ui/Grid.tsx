import { useState, useEffect } from 'react'

import Card from './Card'
import styles from './Grid.module.css'

const Grid: React.FC<{ url: string; random: boolean }> = (props) => {
  const [gifs, setGifs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getRandomData = async () => {
      const dataArray: {
        title: string;
        url: string;
      }[] = []

      for (let i = 0; i < 3; i++) {
        const res = await fetch(props.url)

        if (!res.ok) {
          throw new Error('Something went wrong!')
        }

        const data = await res.json()
        dataArray.push({
          title: data.data.title,
          url: data.data.images.original_mp4.mp4
        })
      }

      setGifs(dataArray)
      setIsLoading(false)
    }

    if (props.random) {
      setIsLoading(true)
      getRandomData().catch(err => {
        setIsLoading(false)
        setError(err.message)
      })
    } else {
    }
  }, [props.url, props.random])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <ul className={styles.grid}>
      {gifs.map((gif) => (
        <Card
          key={gif.title}
          source={gif.url}
          title={gif.title}
        />
      ))}
    </ul>
  )
}

export default Grid
