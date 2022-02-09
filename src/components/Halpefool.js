import React, {useEffect, useState } from 'react';
import imgIcon from '../imgs/icon-peopl.png'
import wimg1 from '../imgs/writingImg/soat.png'
import wimg2 from '../imgs/writingImg/imggul.png'
import wimg3 from '../imgs/writingImg/imgk.png'
import Fade from 'react-reveal/Fade';


import Menu from './main';
import { colors } from '@material-ui/core';

const Halpefool = () => {
    const [show, setShow] = useState(true)
    const [onc, setOnec] = useState(false)
    const [items, setItem] = useState(Menu)



    const itemFiltr = (categitem) => {
        const UpdateItems = Menu.filter((curElement) => {
            return curElement.catigorio === categitem;
        });
        setShow(!show)
        setItem(UpdateItems);
    }
    const openBtns = () => {
        setOnec(!onc)
        console.log("adfasdf")
    }
    useEffect(() => {
        if (!show && items) {
            setShow(!show)
        }
    }, [show,])


    return (
        <div className="helpfool">
            <div className="container">
                <div >
                    <h1 className="about_me">HELPFUL WRITING</h1>
                    <span className="line"></span>
                    <span className="long_line"></span>
                    <span className="line"></span>
                </div>
                <div className="btn_group_div">

                    <div className="helpful_btn_group" id={onc ? "onccl" : "onccl2"} >
                        <button onClick={() => setItem(Menu)} >All</button>
                        <button onClick={() => itemFiltr('ichimlik')} >Frelansing</button>
                        <button onClick={() => itemFiltr('yegulik')}>Ilustration </button>
                        <button onClick={() => itemFiltr('tavar')}>Interesting</button>
                        <button onClick={() => itemFiltr('cals')}>Logo</button>
                        <button onClick={() => itemFiltr('ichimlik')} >Desinger</button>
                        {/* <button onClick={() => itemFiltr('tavar')}> Reserching</button>
                        <button onClick={() => itemFiltr('tavar')}> UI Desinger</button>
                        <button onClick={() => itemFiltr('cals')}> Usabilitiy</button> */}
                    </div>

                    <div className="transbtn">
                        <button onClick={openBtns} className="btn_ident"><i className="fas fa-indent"></i></button>
                    </div>
                </div>

                <div className="writings">
                    <div className="row my-5">
                        {
                            items.map((elem, index)=> {
                                const { id, namee, catigorio, prise, descreption, img } = elem;
                                return (
                                    <Fade bottom key={index} when={show}>
                                        <div className=" col-ms-4 col-md-3 p-3 mb-4 item3">
                                            <div className="card writing_card">
                                                <div className="card-header">
                                                    <img className="wimg1" src={img} alt="wimg1" />
                                                </div>
                                                <div className="card-body">
                                                    <p className="writong_card_title">STANDARD <b>POST</b></p>
                                                    <div className="d-flex ">
                                                        <i className="far fa-calendar-alt mx-1"></i>
                                                        <p className="m-0">FEBRUARY 6, 2017</p>
                                                    </div>
                                                    <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
                                                </div>
                                                <div className="card-footer d-flex  m-0 write_c_footer">
                                                    <img src={imgIcon} className="card_footer-img" />
                                                    <p className="m-0 write_footere_text"> ThemeLooks <br />
                                                        <span className="footer_on">On</span> Publishing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                )

                            })
                        }

                    </div>
                </div>


                <div className="viveall_btn">
                    <button className=" awesome_btn ">All projcts</button>
                </div>
            </div>
        </div>
    );
};

export default Halpefool;















<div className="writings">
    <div className="item1">
        <div className="card writing_card">
            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>

    <div className="item2">
        <div className="card writing_card">

            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>

    <div className="item3">
        <div className="card writing_card">
            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>

    <div className="item4">
        <div className="card writing_card">
            <div className="card-header">
                <img className="wimg1" src={wimg1} alt="wimg1" />
            </div>
            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero.Lorem ipsum dolor    […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>

    <div className="item5">
        <div className="card writing_card">
            <div className="card-header">
                <img className="wimg1" src={wimg2} alt="wimg1" />
            </div>
            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>


    <div className="item6">
        <div className="card writing_card">
            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus  […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>


    <div className="item7">
        <div className="card writing_card">
            <div className="card-header">
                <img className="wimg1" src={wimg3} alt="wimg1" />
            </div>

            <div className="card-body">
                <p className="writong_card_title">STANDARD <b>POST</b></p>
                <div className="d-flex ">
                    <i className="far fa-calendar-alt mx-1"></i>
                    <p className="m-0">FEBRUARY 6, 2017</p>
                </div>
                <p className="writing_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempora corporis eaque possimus veritatis, totam cum impedit omnis unde consequatur eveniet, temporibus cupiditate? Excepturi dolor nisi, quibusdam itaque reprehenderit libero. […]</p>
            </div>
            <div className="card-footer d-flex  m-0 write_c_footer">
                <img src={imgIcon} className="card_footer-img" />
                <p className="m-0 write_footere_text"> ThemeLooks <br />
                    <span className="footer_on">On</span> Publishing</p>
            </div>
        </div>
    </div>
</div>
