import { useState, useEffect } from 'react'

import Card from './Card'
import styles from './Grid.module.css'

const Grid: React.FC<{ url: string; random: boolean }> = (props) => {
  const [gifs, setGifs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const dataArray: {
      title: string
      url: string
    }[] = []

    const getRandomData = async () => {
      for (let i = 0; i < 3; i++) {
        const res = await fetch(props.url)

        if (!res.ok) {
          throw new Error('Something went wrong!')
        }

        const data = await res.json()
        dataArray.push({
          title: data.data.title,
          url: data.data.images.original_mp4.mp4,
        })
      }

      setGifs(dataArray)
      setIsLoading(false)
    }

    const getData = async () => {
      const res = await fetch(props.url)

      if (!res.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await res.json()
      
      for (const key in data.data) {
        dataArray.push({
          title: data.data[key].title,
          url: data.data[key].images.original_mp4.mp4,
        })
      }

      setGifs(dataArray)
      setIsLoading(false)
    }

    setIsLoading(true)
    if (props.random) {
      getRandomData().catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })
    } else {
      getData().catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })
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
        <Card key={gif.title} source={gif.url} title={gif.title} />
      ))}
    </ul>
  )
}

export default Grid
