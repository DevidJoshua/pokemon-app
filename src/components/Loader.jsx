import styled from  '@emotion/styled'
import {Color} from  '../theme'
import Pokeball from '../images/pokeball.svg';
const LoaderOverlay=styled.div`
    font-family: 'Yusei Magic', sans-serif;
    display: 'inline-block';
    position: fixed; /* Stay in place */
    z-index: 5;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(255,255,255);
    background-color: rgba(255,255,255,0.4);

    `
const animType={
    ubounce:'animation: bounce 1000ms infinite;',
    flash:'animation: flash 3000ms infinite;',
    tada:'animation: tada 1200ms infinite;',
    pulse:'animation: pulse 1000ms infinite;',
    swing:'animation: swing 3000ms infinite;'
}
const PokeBallComp=styled.img`
    display:block;
    width: 100px;
    height: 100px;
    margin: 50% auto;

    animation: bounce 1000ms infinite;
`

export const PokeBallLoader = (props)=>{
    return(
        <LoaderOverlay>
            <PokeBallComp src={Pokeball}/>
        </LoaderOverlay>

    )
}


