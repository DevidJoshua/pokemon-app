import {useState,createContext} from 'react'
import ListPokemon from './pages/ListPokemon'
import { RootContainer } from "./components/Containers"
import Poke from  './context/pokemonContext'

function App() {
  const {PokeContext,PokeState} = Poke
   return (
    <PokeContext.Provider value={PokeState}>
      <RootContainer>
        <ListPokemon/>
      </RootContainer>
    </PokeContext.Provider>
  );
}

export default App;
