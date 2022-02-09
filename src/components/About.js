import React from 'react';
import Slider from "react-slick";

import Fade from 'react-reveal/Fade';


const About = ({ width, percent }) => {


    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {

        },
        afterChange: function (currentSlide) {

        }
    };


    return (
        <div id="about" className="about container">
            <div>
                <h1 className="about_me">About me</h1>
                <span className="line"></span>
                <span className="long_line"></span>
                <span className="line"></span>
            </div>

            <div className="row about__body">
                <div className="col-md-6  p-4  about__text-left">
                    <h3 className="who">WHO <b className="lest_a">AM</b> I?</h3>
                    <p className="about_text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi dolor autem deleniti inventore.</p>

                    <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi dolor autem deleniti inventore.</p>

                    <button className="download-cw"><b>download my cv</b></button>
                </div>

                <div className="col-md-6 p-4  about__text-left">
                    <h3 className="who">EXPERT <b className="lest_a">IN</b>   </h3>
                    <p className="about_text ">Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>

                    <div className="pragresbar_about">

                        <div className="progress_name">
                            <h5>GRAPHIC DESIGN</h5>

                        </div>
                        <div className="graficd_div">
                            <Fade left>
                                <span className="graficd_span">
                                    <span className="span_2">
                                        <h1 className="skil_size">
                                            60%
                                        </h1>
                                    </span>
                                </span>
                            </Fade>
                        </div>
                    </div>

                    <div className="pragresbar_about">
                        <div className="progress_name">
                            <h5>css</h5>
                        </div>
                        <div className="graficd_div">
                            <Fade left>
                                <span className="graficd_span_css">
                                    <span className="span_2">
                                        <h1 className="skil_size">
                                            90%
                                        </h1>
                                    </span>
                                </span>
                            </Fade>
                        </div>
                    </div>

                    <div className="pragresbar_about">
                        <div className="progress_name">
                            <h5>javascript</h5>

                        </div>
                        <div className="graficd_div">
                            <Fade left>
                                <span className="graficd_span_javas">
                                    <span className="span_2">
                                        <h1 className="skil_size">
                                            70%
                                        </h1>
                                    </span>
                                </span>
                            </Fade>
                        </div>
                    </div>

                    <div className="pragresbar_about">
                        <div className="progress_name">
                            <h5>wordpress</h5>
                        </div>
                        <div className="graficd_div">
                            <Fade left>
                                <span className="graficd_span_wordp">
                                    <span className="span_2">

                                        <h1 className="skil_size">
                                            50%
                                        </h1>
                                    </span>
                                </span>
                            </Fade>
                        </div>


                    </div>

                </div>

            </div>



            <div className="row abut_slider" >
                <div className="col-md-6  abut_slider_left as_left">
                    <h4 className="about_slid_edu">EDUCATION</h4>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="col-md-6  abut_slider_left as_left">
                    <h4 className="about_slid_edu">EDUCATION</h4>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4 col5edu">
                                        <p>2007-2008</p>
                                        <h6>NY UNIVERSITY</h6>
                                    </div>
                                    <div className="col-md-7 col5edu">
                                        <h5>WEB <b>DEVELOPMENT</b></h5>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>





            </div>

        </div>
    );
};


export default About;


