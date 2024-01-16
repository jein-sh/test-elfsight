import { Characters } from "../../../types/types"
import { Store } from "../types"

type CharactersActionType = 'SET_CHARACTERS'

type Action<Type extends CharactersActionType, Payload> = {
  type: Type
  payload: Payload
}

type SetCharacterAction = Action<
  'SET_CHARACTERS',
  {
    characters: Characters,
  }
>

export type CharactersReducerActions = | SetCharacterAction

type State = Store['characters']

export const charactersReducer = (state: State, action: CharactersReducerActions) : State => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      const { characters }= action.payload

      return characters.reduce<Characters>((acc, character) => {
        acc[character.id]= character

        return acc
      }, [])
    default:
      return state
  }
}
