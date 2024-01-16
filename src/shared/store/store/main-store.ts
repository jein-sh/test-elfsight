import { charactersReducer } from '../characters-reducer'
import { CharactersReducerActions } from '../characters-reducer/characters-reducer'
import { Store } from '../types'
import { initialCharactersStore } from './characters-store'


export const initialState = {
  characters: initialCharactersStore,
}

export const mainReducer = ({ characters }: Store, action: CharactersReducerActions) => ({
  characters: charactersReducer(characters, action),
})
