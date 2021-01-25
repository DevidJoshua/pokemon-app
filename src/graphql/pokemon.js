import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_BASE_URL,
    cache: new InMemoryCache()
  });


export const fetchListPokemon = async() =>{
   try{
        return new Promise((resolve,reject)=>{
                        client.query({
                            query: gql`
                                query{
                                    pokemons(limit:100){
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
       console.log('Erro fetch Pokemons>>>>',err);
   }
}
export const navigateData = async(url) =>{
    try{
        return new Promise(async(resolve,reject)=>{
            const data=await fetch(url).then(res=>res.json()).catch(err=>reject(err))
            resolve(data)
        })
    }catch(err){
        console.log('Erro fetch Pokemons>>>>',err);
    }
 }

