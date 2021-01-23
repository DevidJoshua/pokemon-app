import styled from  '@emotion/styled'
import {Color} from  '../theme'

const RootContainerComp=styled.div`
  padding:0px;
  margin:0px;
  display:block;
  background: linear-gradient(0deg, ${Color.backgroundContainerColor1} 35%, ${Color.backgroundContainerColor2} 100%);
  width:100%;
  height:100%;
`
export const RootContainer = (props)=>{
    return(
        <RootContainerComp>
            {(props.children)}
        </RootContainerComp>

    )
}


export const Container = (props) =>{
    return(
        <div className="container">
            {(props.children)}
        </div>
    )
}


