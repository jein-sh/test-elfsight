import { Character } from '../../../types/types'

import { CharacterCard } from '../character-card'
import { List } from './styles'


type CharactersListProps = {
  characters: Character[],
  onCardClick: (id: number) => void,
}

export const CharactersList = ({ characters, onCardClick}: CharactersListProps) => {
  
  return (
    <List>
      {characters.map(({ id, name, image, status, species, gender }) => (
        <li key={id}>
          
          <CharacterCard
            name={name}
            imgUrl={image}
            status={status}
            species={species}
            gender={gender}
            onClick={() => {
              onCardClick(id)}
            }
          />
        </li>
      ))}
    </List>
  )
}
