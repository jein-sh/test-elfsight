import { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react'
import { CharactersReducerActions } from '../../characters-reducer/characters-reducer';
import { initialState, mainReducer } from '../../store/main-store';

import { Store } from '../../types';

type ContextProps = { 
  state: Store,
  dispatch: Dispatch<CharactersReducerActions>,
};

export const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
})

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)
