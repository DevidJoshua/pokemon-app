import { from } from '@apollo/client'
import styled from  '@emotion/styled'
import {Color} from  '../theme'

// # Mobile
// only screen and (min-width: 3600px)

// # Tablet
// only screen and (min-width: 768px)

// # Desktop
// only screen and (min-width: 992px)

// # Huge
// only screen and (min-width: 1280px)

function generateCardBackgroundColor(type){
    const colors=Color.typesColor
    return type ? colors[type[0].type.name] : '#ffff'
}
const CardViewComp=styled.div`
    box-sizing:border-box;
    font-family: 'Yusei Magic', sans-serif;
    display:inline-block;
    text-align:center;
    border-radius:5vh;
    width:246px;
    min-height:300px;
    overflow:hidden;
    margin:10px;
    padding:10px;
    background:${props=>generateCardBackgroundColor(props.type)};
    @media only screen and (min-width: 360px){
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    @media only screen and (min-width: 768px){

    }
    @media  only screen and (min-width: 992px){

    }
    @media only screen and (min-width: 1280px){

    }
    &:hover {
        cursor: pointer;
        opacity: 0.3;
        // cursor: url(your-image-path.png), auto; ganti cursor
        // img{
        //     width:100%;
        // }
        // p{
        //     position:fixed;
        // }
    }
`
const CardImageComp=styled.img`
    width:90%;
`
const CardNameComp=styled.p`
    font-size:20pt;
    font-weight:bold;
    display:block;
    marrgin:0;
    border-radius:2vh;
    background:${Color.colorFour}
`

export const CardPokemon = (props)=>{
   const owned=props.getOwn().then()
   return(
       <CardViewComp onClick={props.onClick} type={props.type}>
           <div style={{margin:'auto',marginTop:20,width:'70%',background:'rgba(255, 255, 255, 0.6)',borderRadius:'1000vh'}}>
                <CardImageComp src={props.pokeImg}/>
           </div>
           <CardNameComp>{props.pokeName}</CardNameComp>
           <p style={{fontWeight:'bold',color:Color.typesBgColor[props.type[0].type.name]}}>Type: {props.type[0].type.name}</p>
           <p style={{color:Color.typesBgColor[props.type[0].type.name]}}>Owned: {0}</p>
       </CardViewComp>
   )
}
const CardMyPokeViewComp=styled.div`
    box-sizing:border-box;
    font-family: 'Yusei Magic', sans-serif;
    display:inline-block;
    text-align:center;
    border-radius:5vh;
    width:246px;
    min-height:300px;
    overflow:hidden;
    margin:10px;
    padding:10px;
    background:${props=>generateCardBackgroundColor(props.type)};
    @media only screen and (min-width: 360px){
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
    @media only screen and (min-width: 768px){

    }
    @media  only screen and (min-width: 992px){

    }
    @media only screen and (min-width: 1280px){

    }
    &:hover {
        cursor: pointer;
        opacity: 0.3;
        // cursor: url(your-image-path.png), auto; ganti cursor
        // img{
        //     width:100%;
        // }
        // p{
        //     position:fixed;
        // }
    }
`
const CardMyPokeImageComp=styled.img`
    width:90%;
`
const CardMyPokeNameComp=styled.p`
    font-size:20pt;
    font-weight:bold;
    display:block;
    marrgin:0;
    border-radius:2vh;
    background:${Color.colorFour}
`

export const CardMyPokePokemon = (props)=>{
   const owned=props.getOwn().then()
   return(
       <CardMyPokeViewComp onClick={props.onClick} type={props.type}>
           <div style={{margin:'auto',marginTop:20,width:'70%',background:'rgba(255, 255, 255, 0.6)',borderRadius:'1000vh'}}>
                <CardMyPokeImageComp src={props.pokeImg}/>
           </div>
           <CardMyPokeNameComp>{props.pokeName}</CardMyPokeNameComp>
           <p style={{fontWeight:'bold',color:Color.typesBgColor[props.type[0].type.name]}}>Type: {props.type[0].type.name}</p>
           <p style={{color:Color.typesBgColor[props.type[0].type.name]}}>Owned: {0}</p>
       </CardMyPokeViewComp>
   )
}


