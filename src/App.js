import {useState,createContext} from 'react'
import ListPokemon from './pages/ListPokemon'
import CaughtPokemon from './pages/MyCaughtPokemon'
import { RootContainer } from "./components/Containers"
import PokeContext from  './context/PokemonContext'
const pages = [
  {component:<ListPokemon/>,path:'/'},
  {component:<CaughtPokemon/>,path:'/my-caughtpokemon'}
]
function App() {
  const [state, setstate] = useState(false)
  //listen to localstoreage
  window.addEventListener("storage",(e) => {
    setstate(true)
  });
  const page=pages.filter((o)=>o.path === window.location.pathname)
  console.log('page>>>',page);
  const selectedComponent=page[0].component
   return (
    <PokeContext>
      <RootContainer>
          {selectedComponent}
      </RootContainer>
    </PokeContext>
  );
}

export default App;
