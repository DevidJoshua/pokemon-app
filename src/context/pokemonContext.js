import {createContext} from 'react'


// data sturct
// [
//     {idCaught,idPoke,name,nickname}
// ]


const nameItem='caughtPokemon'
function chehckBrowserSupport(fn){
    if (typeof(Storage) == "undefined") {
        return console.log('Sorry Your browser dons\'t support localstorage');
    }
}

const catchPokemon = async(pokeData,fn) =>{
    const listPokemons=window.localStorage.getItem(nameItem,[])
    let id=0
    //generate id auto incrementt
    if(listPokemons.length > 0){
        const maxValue=await Math.max.apply(Math, listPokemons.map((row)=>row.idCaught))
             id=maxValue+1
    }
    pokeData.idCaught=id
    listPokemons.push(pokeData)
    fn()
}

const getCaughtPokemon = () =>{
    const listPokemons=window.localStorage.getItem(nameItem,[])
    return listPokemons
}

const renameCaughtPokemon = (idCatchPoke,nickname) =>{
    const listPokemons=window.localStorage.getItem(nameItem,[])
          window.localStorage.setItem(nameItem,[])
}

const releaseCaughtPokemon = async(idCaughtPoke,fn) =>{
    const listPokemons=window.localStorage.getItem(nameItem,[])
    const newPokeList= await listPokemons.filter(row=>row.idCaught !== idCaughtPoke)
    window.localStorage.setItem(nameItem,newPokeList)
    fn()
}

const countCaughtPokemonById = (idPoke) =>{
    const listPokemons=window.localStorage.getItem(nameItem,[])
    if(listPokemons.length>0){
        const specifiedPokeList=listPokemons.filter(row=>row.pokeId === idPoke)
        return specifiedPokeList.length
    }
    return 0
}




const PokeContext = createContext()
const PokeState = {releaseCaughtPokemon,countCaughtPokemonById,catchPokemon,getCaughtPokemon,renameCaughtPokemon}

export default {PokeContext,PokeState}