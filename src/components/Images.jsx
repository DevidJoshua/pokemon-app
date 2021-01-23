import styled from  '@emotion/styled'
import {Color} from  '../theme'

const ImgLogoComp=styled.img`

`
export const ImgLogo = (props)=>{
    console.log('src>>>>',props.src);
    return(<ImgLogoComp src={props.src}/>)
}



