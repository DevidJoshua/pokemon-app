import styled from  '@emotion/styled'
import {Color} from  '../theme'

const RootContainerComp=styled.div`
  padding:0px;
  margin:0px;
  width:100%;
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
    margin:0px auto;
    background: linear-gradient(0deg, ${Color.colorTwo} 35%, ${Color.backgroundContainerColor2} 100%);
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
        // <center>
            <ContainereComp>
                {(props.children)}
            </ContainereComp>
        // </center>
    )
}


