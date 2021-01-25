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

const GridViewComp=styled.div`
    display:block;
    margin-top:100px;
    @media only screen and (min-width: 360px){

    }
    @media only screen and (min-width: 768px){

    }
    @media  only screen and (min-width: 992px){

    }
    @media only screen and (min-width: 1280px){

    }
`
export const GridView = (props)=>{
   return(
       <GridViewComp>
           {(props.children)}
       </GridViewComp>
   )
}



