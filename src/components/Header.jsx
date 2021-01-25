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

const HeaderHomeComp=styled.nav`
    font-family: 'Yusei Magic', sans-serif;
    width:800px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin:0px auto;
    background:${Color.colorOne};
    box-sizing:border-box;
    padding:30px 0px;
    position:fixed;
    border-bottom-left-radius:5vh;
    border-bottom-right-radius:5vh;
`
export const HeaderHome = (props)=>{
    return(
        <HeaderHomeComp>
            {(props.children)}
        </HeaderHomeComp>
    )
}




