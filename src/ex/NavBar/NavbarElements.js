import styled from 'styled-components';
import { Container } from './globalStyles'

export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-around;
height:80px;
${Container};
@media screen and (max-width:960px){
    display:flex;
    justify-content:flex-start;
    padding: 0px 0px !important;
}
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
display:block;
position:absolute;
right:15px;
transform:translate(-100%, 50%);
font-size:1.8rem;
cursor:pointer;
transition:all .5s linear;
}
@media screen and (max-width:590px){
    right:6px !important;
    font-size:1.4rem;
}
`
export const NavMenu = styled.ul`
display:flex !important;
justify-content:center !important;
align-items:center !important;
text-align:center;
font-size:14px !important;

@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    position:absolute;
    height:80vh;
    width:100%;
    top:40px;
    left: ${({click}) => (click ? 0 : '-120%')};
    opacity:1;
    transition: all 0.5s ease;
    background:#fff;   
    .hireme{
        display: none;
    }
    .Navitems{
        padding:40px !important; 
        border:2px solid red;
    }
}
`
export const NavItem = styled.li`
    padding-top:10px;
    list-style:none;
    height:80px;
    border-bottom:2px solid transparent;


@media screen and (max-width:960px){
    border:none;
}
`
export const Button = styled.button`
 border-top-right-radius: 4px;
 border-bottom-right-radius:4px;
 position:relative;
 top:-38px;
 padding:7px 11px;
 left:100%;
 display:inline-block;
 border:none;
 outline:none;
 background:gold;
`