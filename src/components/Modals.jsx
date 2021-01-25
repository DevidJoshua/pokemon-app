import styled from  '@emotion/styled'
import {Color} from  '../theme'
import colors from '../theme/colors'
import {SimpleButton} from './Buttons'


const ModalComp=styled.div`
    font-family: 'Yusei Magic', sans-serif;
    display: ${props=>props.show ? 'inline-block' : 'none'};
    position: fixed; /* Stay in place */
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    `
function generateCardBackgroundColor(type){
    const colors=Color.typesColor
    return type ? colors[type[0].type.name] : '#ffff'
}
const ModalContentComp=styled.div`
    background-color: ${props=>generateCardBackgroundColor(props.type)};
    border-radius:5vh;
    box-sizing:border-box;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    height:fit-content;

    @media only screen and (min-width: 360px){

    }
    @media only screen and (min-width: 768px){

    }
    @media  only screen and (min-width: 992px){

    }
    @media only screen and (min-width: 1280px){
        margin: 5% auto;
    }
`
const ModalImageComp=styled.img`
    width: 300px;
    heigth:auto;
`
const DetailsWrapper=styled.div`
    display:flex;
`
const SubDetailsWrapper=styled.div`
    display:inline-block;
    flex:1;
`

const TypesComp = styled.div`
    display:inline-block;
    border-radius:2vh;
    margin:0 3px;
    width:fit-content;
    padding:2px 10px;
    text-align:center;
    background:${props=>Color.typesColor[props.type]};
    color:${props=>Color.typesBgColor[props.type]};
`
const MovesComp = styled.div`
    display:inline-block;
    border-radius:2vh;
    margin:2px 3px;
    width:fit-content;
    padding:2px 10px;
    text-align:center;
    background:${Color.colorThree};
    color:${Color.colorOne};
`
const CatchButtonComp = styled.button`
   float:right;
   display:inline-block;
   font-size:30px;
   padding:5px 10px;
   border-radius:10vh;
   &:hover{
    cursor:pointer;
    background: ${Color.buttonColor2};
    color: ${Color.colorOne}
}
`
export const ModalDetailPoke = (props)=>{
    const data=props.dataModal
    return(
        <ModalComp show={props.show} type={props.type}>
            {(data&&
                <ModalContentComp>
                <br/>
                <br/>
                <DetailsWrapper>
                    <SubDetailsWrapper>
                        <h1>Name: {data.name}</h1>
                        <h3>Types</h3>
                        <div style={{display:'inline'}}>{((data.types).map((r,i)=><TypesComp key={i} type={r.type.name}>{r.type.name}</TypesComp>))}</div>
                        <h3>Moves</h3>
                        <div style={{display:'scroll'}}>{((data.moves).slice(0, 5).map((r,i)=><MovesComp key={i} >{r.move.name}</MovesComp>))}</div>
                    </SubDetailsWrapper>
                    <div style={{display:'block',height:'fit-content',padding:20,borderRadius:'100%',background:colors.typesColor[data.types[0].type.name]}}>
                        <ModalImageComp src={data.sprites.front_default ? data.sprites.front_default : data.sprites.back_default}/>

                    </div>
                </DetailsWrapper>
                <div>
                    <SimpleButton bg={Color.colorThree} cl={Color.colorOne} onClick={()=>props.closeFn()}>Close</SimpleButton>
                    {/* <CatchButtonComp onClick={}>Catch</CatchButtonComp> */}
                </div>

        </ModalContentComp>
            )}
        </ModalComp>
    )
}



