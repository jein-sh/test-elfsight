import { useMemo } from 'react'
import { Characters } from '../../../../../types/types'

export const useCharactersFilter = (characters: Characters, filterText: string) => {
  return useMemo(() => {
    if (!filterText) {
      return characters
    }

    return characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    )
  }, [characters, filterText])
}
