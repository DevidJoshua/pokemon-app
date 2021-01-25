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
    width:100%;
    background:${Color.backgroundContainerColor2};
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



