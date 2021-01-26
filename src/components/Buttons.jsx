import {useState} from 'react'
import styled from  '@emotion/styled'
import {Color,Images} from  '../theme'

const ButtonComp=styled.button`
    border: 1px solid ${props=> props.cl ? props.bg : '#801515' };
    width:80px;
    background: transparent;
    color:${props=> props.cl ? props.bg : '#801515' };
    font-size: 24px;
    text-align:center;
    padding: 0.5em 0.1em;
    display:inline-block;
    border-radius:5vh;
    outline:none;
    &:hover{
        cursor:pointer;
        opacity: 0.8;
        background: ${props=> props.bg ? props.bg : '#550000' };
        color: ${props=> props.cl ? props.cl : '#FFFFFF' }
    }
`
export const SimpleButton = (props)=>{

   return(
       <ButtonComp onClick={props.onClick} bg={props.bg} cl={props.cl}>{props.children}</ButtonComp>
   )
}

const MyPokeComp=styled.img`
    width:70px;
    font-size:24px;
    text-align:center;
    border-radius:100%;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    &:hover{
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        cursor:pointer;
        transition: transform .5s ease;
        transform: scale(1);
    }
`
const Cent = styled.div`
    position:absolute;
    bottom:15px;
    right:31px;
    p{
        display:none;
    }
    &:hover{
        p{
            display:block;
        }
    }
`
function redirectUrl(fn){
    // window.history.replaceState(null, null, "/my-caughtpokemon")
    window.location.href = "/my-caughtpokemon"

}
export const ButtonMypoke = (props)=>{
    const[redirect,setRedirect]=useState(false)
    return(
       <Cent style={{}}>
            <center>
                <MyPokeComp onClick={()=>redirectUrl(setRedirect(true))} src={Images.PokeBall}/>
                <p style={{margin:0,fontWeight:'bold',color:Color.buttonColor2}}>Caught Pokemons</p>
            </center>
       </Cent>

    )
 }

