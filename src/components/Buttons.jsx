import styled from  '@emotion/styled'
import {Color} from  '../theme'

const ButtonComp=styled.div`
    border: 1px solid ${props=> props.cl ? props.bg : '#801515' };
    width:80px;
    background: transparent;
    color:${props=> props.cl ? props.bg : '#801515' };
    font-size: 24px;
    text-align:center;
    padding: 0.5em 0.1em;
    display:inline-block;
    border-radius:5vh;
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



