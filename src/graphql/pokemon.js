import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_BASE_URL,
    cache: new InMemoryCache()
  });

const pokemonData = async(pokemon) =>{
    let dataPokemon=pokemon
    let dataShaped=[]
    // append type data
    new Promise.all(
        dataPokemon.map(async r=>{
        await fetch(r.url)
        .then(res=>res.json())
        .then(async details=>{
            let row = {...r}
            row.types=details.types
            dataShaped.push(row)
        })
    }))

}

export const fetchListPokemon = async() =>{
   try{
        return new Promise((resolve,reject)=>{
                        client.query({
                            query: gql`
                                query{
                                    pokemons(limit:20){
                                        next
                                        previous
                                        count
                                        status
                                        results{
                                            url
                                        }
                                    }
                                }
                            `
                        })
                        .then(res=>resolve(res.data.pokemons))
                        .catch(err=>reject(err))


                    })


   }catch(err){
       console.log('Error>>>>',err);
   }

}