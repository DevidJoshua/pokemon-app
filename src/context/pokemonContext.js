import {createContext,useState} from 'react'


// data sturct
// [
//     {idCaught,pokeData:{id},name,nickname}
// ]
        export const PokemonContext = createContext()

function PokeContext(props){

        const nameItem='caughtPokemon'
        let list = window.localStorage.getItem(nameItem)
        const listPokemons=JSON.parse(list)||[]
        const [listOwnedPokemons,setListOwnedPokemons] =useState([])
        function chehckBrowserSupport(fn){
            if (typeof(Storage) == "undefined") {
                return console.log('Sorry Your browser dons\'t support localstorage');
            }
        }
        chehckBrowserSupport()

        const catchPokemon = async(pokeData) =>{;
            let id=0
            let dataMyPoke={idCaught:0,idPoke:pokeData.id,pokeData,nickname:'alo'}
            //generate id auto incrementt
            if(listPokemons.length > 0){
                const maxValue=await Math.max.apply(Math, listPokemons.map((row)=>row.idCaught))
                    id=maxValue+1
            }
            dataMyPoke.idCaught=id
            listPokemons.push(dataMyPoke)
            window.localStorage.setItem(nameItem,JSON.stringify(listPokemons))

            setListOwnedPokemons(listPokemons)
        }

        const renameCaughtPokemon = async(idCaughtPoke,nickname) =>{

            const specifiedPoke=await listPokemons.filter(row=>row.idCaught !== idCaughtPoke)
                window.localStorage.setItem(nameItem,[])
        }

        const releaseCaughtPokemon = async(idCaughtPoke,fn) =>{
            const newPokeList= await listPokemons.filter(row=>row.idCaught !== idCaughtPoke)
            window.localStorage.setItem(nameItem,newPokeList)
            fn()
        }

        const countCaughtPokemonById = async(idPoke) =>{
            if(listPokemons.length>0){
                const specifiedPokeList=listPokemons.filter(row=>row.pokeId === idPoke)
                return specifiedPokeList.length
            }
            return 0
        }
        const PokeState = {listOwnedPokemons,releaseCaughtPokemon,countCaughtPokemonById,catchPokemon,renameCaughtPokemon}

            return(<PokemonContext.Provider value={PokeState}>{props.children}</PokemonContext.Provider>)
        }
export default PokeContext