import React,{useEffect,useContext} from 'react'

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
import {SimpleButton,ButtonMypoke} from '../components/Buttons'
//service
import {fetchListPokemon,navigateData} from '../graphql/pokemon'
//context



function MyCaughtPokemon(){
  const [data,setData] = React.useState([])


    return(
        <Container>
            <HeaderHome>
                <center><h1>My Chaught Pokemon</h1></center>
            </HeaderHome>

            <br/>
            <br/>
            {/* {(isRequest && <PokeBallLoader />)}
            {(!isRequest &&
                <GridView>
                    {data.map(res=>(
                        <CardPokemon
                        onClick={()=>onClickItem(res)}

                        key={res.id}
                        type={res.types}
                        pokeName={res.name}
                        pokeImg={res.sprites.front_default ? res.sprites.front_default : res.sprites.back_default}
                        />
                    ))}
                </GridView>
            )} */}
        </Container>
    )
}

export default MyCaughtPokemon