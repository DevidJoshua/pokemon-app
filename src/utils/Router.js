//i crate my own function to make website lighter for this small app only
//routes

import ListPokemon from '../pages/ListPokemon'


const routes = [
    {page:'/',component:ListPokemon},
    {page:'/log-user',component:ListPokemon}
]
const router = ({page,component}) =>{

}

const redirect = page => window.history.replaceState({},'',page)
const validate = () =>{
    const authorizedRoutes=['/','list-pokemons','my-pokemons']

    process.env.REACT_APP_KEY_ENCRYPT}
}