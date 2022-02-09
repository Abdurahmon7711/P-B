import React, { useState, useEffect } from 'react'
import imglogo from '../../imgs/logo.png'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import img11 from '../../imgs/11.png'

import {
    NavbarContainer,
    MobileIcon, NavMenu, NavItem,
} from './NavbarElements'
import './Header.css'

function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}    


export default function Header(props) {


    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state


    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)

        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [button])

    window.addEventListener('resize', showButton)
    const handleClick = () => setClick(!click)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav expand='lg' className={navbar ? 'active' : 'navbar'}>
                <NavbarContainer>
                    <a href='/' className="navlogos">
                        <div className="nav_logo">
                            <img src={imglogo} className="nav__logo-img" />
                            <div className="logo__text">
                                <p>John <span className="   ">Doe</span></p>
                                <p><span className="done">UX/UI</span> DESIGNER</p>
                            </div>
                        </div>
                    </a>
                    <MobileIcon onClick={handleClick}>
                        {click ? <i className="fas fa-times ik"></i> : <i className="fas fa-bars ik"></i>}
                    </MobileIcon>
                    <NavMenu className="Navitems" onClick={handleClick} click={click}>
                        <NavItem>
                            <a href="/" className="navlink">home</a>
                        </NavItem>
                        <NavItem>
                            <a href="#about" className="navlink">about</a>
                        </NavItem>
                        <NavItem>
                            <a href="#service" className="navlink">services</a>
                        </NavItem>
                        <NavItem>
                            <a href="#awesomes" className="navlink">works</a>
                        </NavItem>
                        <NavItem>
                            <a href="#teamid" className="navlink">team</a>
                        </NavItem>
                        <NavItem>
                            <a href="#" className="navlink">shop</a>
                        </NavItem>
                        <NavItem>
                            <a href="#contacts" className="navlink">contact</a>
                        </NavItem>
                        
                        <Button className="hireme" id="asd"
                            onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}>
                            hire me
                        </Button>
                        
                    </NavMenu>
                </NavbarContainer>
            </nav>



            <div>
                <Modal
                    className={"modal1"}
                    dimmer={dimmer}
                    open={open}
                    onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>

                    <div className="modal_div">
                        <Modal.Header className="modal_herder">
                            <h1>Use Google's location service?</h1>
                            <p>I’m ready to help you. You just type details below, and/or send us a file.</p>
                        </Modal.Header>
                        <Modal.Content>
                            <div className="row box02">
                                <div className=" col-md-7">
                                    <div className="form_control">

                                        <div className="inputdata">
                                            <input required placeholder="Your name..." type="text" className="imputtext" />
                                            <input required placeholder="@email.com" type="text" className="imputtext" />
                                        </div>

                                        <div className="inputdata">
                                            <input placeholder="Your prajct name..." type="text" className="imputtext" />
                                            <select className="imputtext" name="cars" id="cars">
                                                <option value="-Select Cace catigorio">-Select Cace catigorio</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>

                                        <div className="inputdata">
                                            <select className="imputtext" name="cars" id="cars">
                                                <option value="-Budget-">-Budget-</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>

                                            <input placeholder="-Estimate Data-" type="text" className="imputtext" />
                                        </div>

                                        <div>
                                            <textarea className="textarea_input" > </textarea>
                                            <input className="filed" type="file" id="myfile" name="myfile" />

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div>
                                        <div className="modal_img">
                                            <img src={img11} />
                                        </div>
                                        <h5>Is An Estimate Required?</h5>
                                    </div>
                                    <div>
                                        <form action="/action_page.php">
                                            <div className="radio">
                                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                                <label className="lablei" for="html">No Estimate Required</label> <br />
                                            </div>

                                            <div className="radio">
                                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                                <label className="lablei" for="css">Yes, I require an estimate cost of services. I understand I need to allow 2-4 business days to receive the estimate.</label>
                                            </div>
                                            <button negative type="submit" className="semdpffer">send offer</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </Modal.Content>

                        <i onClick={() => dispatch({ type: 'CLOSE_MODAL' })} className="fas fa-times closemodal"></i>
                    </div>

                </Modal>

            </div>

        </>
    )
};






