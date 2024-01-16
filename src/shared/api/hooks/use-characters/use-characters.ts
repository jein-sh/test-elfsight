import { useEffect, useState } from 'react'
import { getCharacters } from '../../get-characters'

export const useCharacters = (query: string) => {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCharacters(query)
      .then((characters) => {
        setCharacters(characters.results)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [query])

  return { data: characters, error, loading }
}
