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
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5',
        ice:'#3fd0d4',
        psychic:'#49804b',
        steel:'#9fa19f',
        ghost:'#695282',
        dark: '#200142',
        shadow:'#30385c',
        unknown:'#a3a3a3',
    };


    return type ? colors[type] : '#ffff'
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
   return(
       <CardViewComp type={props.type}>
           <div style={{margin:'auto',marginTop:20,width:'70%',background:'rgba(255, 255, 255, 0.6)',borderRadius:'1000vh'}}>
                <CardImageComp src={props.pokeImg}/>
           </div>
           <CardNameComp>{props.pokeName}</CardNameComp>
           <p style={{fontWeight:'bold'}}>Type: {props.type}</p>
       </CardViewComp>
   )
}



