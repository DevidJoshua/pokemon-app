import styled from  '@emotion/styled'
import {Color} from  '../theme'

const RootContainerComp=styled.div`
  padding:0px;
  margin:0px;
  display:block;
  width:100%;
  heigth: 100vh;
`
export const RootContainer = (props)=>{
    return(
        <RootContainerComp>
            {(props.children)}
        </RootContainerComp>

    )
}

const ContainereComp=styled.div`
    width:800px;
    heigth: 100vh;
    margin:0px auto;
    background: linear-gradient(0deg, ${Color.colorTwo} 35%, ${Color.backgroundContainerColor2} 100%);
    box-sizing:border-box;
    @media only screen and (min-width: 360px){

    }
    @media only screen and (min-width: 768px){

    }
    @media  only screen and (min-width: 992px){

    }
    @media only screen and (min-width: 1280px){

    }
`

export const Container = (props) =>{
    return(
        <ContainereComp>
            {(props.children)}
        </ContainereComp>
    )
}


