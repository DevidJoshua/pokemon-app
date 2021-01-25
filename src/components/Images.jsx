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

const ImgLogoComp=styled.img`
    display:block;
    margin-left:auto;
    margin-right:auto;
    @media only screen and (min-width: 360px){
        width:200px;
    }
    @media only screen and (min-width: 768px){
        width:100px;
    }
    @media  only screen and (min-width: 992px){
        width:60px;
    }
    @media only screen and (min-width: 1280px){
        width:60px;
    }
`
export const ImgLogo = (props)=>{
    return(<ImgLogoComp src={props.src}/>)
}



