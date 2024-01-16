import { useCallback, useEffect, useMemo, useState } from 'react'
import { useStore } from '../../store'
import { useCharacters } from '../../api/hooks'
import { CharactersList } from '../../components/characters-list'
import { useGlobalLoading } from '../../providers/global-loading-provider'
import { Filter, Header, Title, Wrapper } from './styles'
import PopupCharacter from '../../components/popup/popup'
import { Character } from '../../../types/types'

export const Characters = () => {
  const [charactersFilter, setCharactersFilter] = useState('')
  const [activeCard, setActiveCard] = useState<Character | undefined>(undefined)
  const [popupShow, setPopupShow] = useState<boolean>(false)

  const { state, dispatch } = useStore()
  const { data, loading } = useCharacters(charactersFilter)

  const { setGlobalLoading } = useGlobalLoading()

  useEffect(() => {
    setGlobalLoading(loading)
  }, [loading, setGlobalLoading])

  useEffect(() => {
    dispatch({
      type: 'SET_CHARACTERS',
      payload: {
        characters: data,
      },
    })
  }, [data, dispatch])

  const characters = useMemo(
    () => Object.values(state.characters),
    [state.characters],
  )

  const onChangeHandler = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCharactersFilter(target.value)
  }, [])

  return (
    <Wrapper>
      <Header>
        <Title>Rick and Morty characters</Title>
        <Filter
          onChange={onChangeHandler}
          value={charactersFilter}
          placeholder="Enter the character name, status, gender"
        />
      </Header>
      <main>
        <CharactersList
          characters={characters}
          onCardClick={(id) => {
            const activeCard = characters.find((item) => item.id === id);
            setActiveCard(activeCard)
            setPopupShow(true); 
          }}
        />
        <PopupCharacter active={popupShow} character={activeCard} onClose={() => setPopupShow(false)}/>
      </main>
    </Wrapper>
  )
}
