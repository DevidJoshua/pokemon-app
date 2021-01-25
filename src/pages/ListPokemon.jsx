import React,{useEffect} from 'react'

//themes
import {ImgLogo} from '../components/Images'
import {Images} from '../theme'
//components
import {Container} from '../components/Containers'
import {GridView} from '../components/List'
import {CardPokemon} from '../components/Card'
import {ModalDetailPoke} from '../components/Modals'
import {HeaderHome} from '../components/Header'

//service
import {fetchListPokemon} from '../graphql/pokemon'


function ListPokemon(){
  const [data,setData] = React.useState([])
  const [nextUrl,setNextUrl] = React.useState([])
  const [prevUrl,setPrevUrl] = React.useState([])
  const [totalAll,setTotalAll] = React.useState(0)
  const [isRequest,setIsRequest] = React.useState(false)

  const getPokemonData = async(pokemon) =>{
    return await Promise.all(
        pokemon.map(async r=>{
            return await fetch(r.url).then(res=>res.json())
        })
    )
  }

  useEffect(()=>{
    setIsRequest(true)
    fetchListPokemon()
    .then(async data=>{
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        await setData(await getPokemonData(data.results))
        setIsRequest(false)
    })
  },[])
    return(
        <Container>
            <ModalDetailPoke/>
            <HeaderHome>
                <ImgLogo src={Images.LogoPoke}/>
            </HeaderHome>
            <br/>
            <br/>
            <GridView>
                {/* {data.map(res=>(
                    <CardPokemon key={res.id} type={res.types[0].type.name} pokeName={res.name} pokeImg={res.sprites.front_default ? res.sprites.front_default : res.sprites.back_default}/>
                ))} */}
            </GridView>
        </Container>
    )
}

export default ListPokemon