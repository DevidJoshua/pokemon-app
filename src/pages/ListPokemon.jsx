import React,{useEffect} from 'react'

//themes
import {ImgLogo} from '../components/Images'
import {Images,Color} from '../theme'
//components
import {Container} from '../components/Containers'
import {GridView} from '../components/List'
import {CardPokemon} from '../components/Card'
import {ModalDetailPoke} from '../components/Modals'
import {HeaderHome} from '../components/Header'
import {PokeBallLoader} from '../components/Loader'
import {SimpleButton} from '../components/Buttons'
//service
import {fetchListPokemon,navigateData} from '../graphql/pokemon'


function ListPokemon(){
  const [data,setData] = React.useState([])
  const [nextUrl,setNextUrl] = React.useState([])
  const [prevUrl,setPrevUrl] = React.useState([])
  const [totalAll,setTotalAll] = React.useState(0)
  const [isRequest,setIsRequest] = React.useState(false)
  const [dataModal,setDataModal] = React.useState(null)
  const [isShowModal,setIsShowModal] = React.useState(false)

  const getPokemonData = async(pokemon) =>{
    return await Promise.all(
        pokemon.map(async r=>{
            return await fetch(r.url).then(res=>res.json())
        })
    )
  }
  const navigate = async(url) =>{
    setIsRequest(true)
    navigateData(url)
    .then(async data=>{
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        await setData(await getPokemonData(data.results))
        setIsRequest(false)
    })
  }
  function onClickItem(data){
      setIsShowModal(true)
      setDataModal(data)
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
            <ModalDetailPoke closeFn={()=>setIsShowModal(false)} show={isShowModal} dataModal={dataModal}/>
            <HeaderHome>
               <center><SimpleButton onClick={()=>navigate(prevUrl)} bg={Color.colorTwo} cl={Color.backgroundContainerColor1}>Prev</SimpleButton>&nbsp;&nbsp;&nbsp;<ImgLogo src={Images.LogoPoke}/> &nbsp;&nbsp;<SimpleButton onClick={()=>navigate(nextUrl)} bg={Color.colorTwo} cl={Color.backgroundContainerColor1}>Next</SimpleButton></center>
            </HeaderHome>

            <br/>
            <br/>
            {(isRequest && <PokeBallLoader />)}
            {(!isRequest &&
                <GridView>
                    {data.map(res=>(
                        <CardPokemon
                        onClick={()=>onClickItem(res)}
                        key={res.id}
                        type={res.types}
                        pokeName={res.name}
                        pokeImg={res.sprites.front_default ? res.sprites.front_default : res.sprites.back_default}/>
                    ))}
                </GridView>
            )}
        </Container>
    )
}

export default ListPokemon