import React from 'react'
import {Container} from '../components/Containers'
import {ImgLogo} from '../components/Images'
import {Images} from '../theme'
// import logo from '../images/logo-pokemon.png'

function ListPokemon(){
    return(
        <Container>
            {/* <ImgLogo src={Images.logoPoke}/> */}
            <img src={Images.LogoPoke}/>
        </Container>
    )
}

export default ListPokemon