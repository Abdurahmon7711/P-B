import React from 'react';

const Contacts = () => {
    return (
        <div id="contacts" >
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <div className="col-md-6 form_c">
                            <div >
                                <h1 className="about_me contact_title">Contact address</h1>
                                <span className="line_c"></span>
                                <span className="long_line_c"></span>
                                <span className="line_c"></span>
                            </div>
                            <div className="contact_left">
                                <i className=" contact_icon fas fa-home"></i>
                                <p className="m-0"> 896 East Shawarapara, Mirpur, Dhaka, Bangladesh.</p>
                            </div>
                            <div className="contact_left">
                                <i className=" contact_icon fas fa-envelope"></i>
                                <p className="m-0">support@example.com</p>
                            </div>
                            <div className="contact_left">
                                <i className=" contact_icon fas fa-phone"></i>
                                <p className="m-0"> +998 99 999 99 99</p>
                            </div>
                            <div className="contact_left">
                                <i className=" contact_icon fas fa-fax"></i>
                                <p className="m-0"> +1-212-9876543</p>
                            </div>

                            <div className="contact_left">
                                <i className=" contact_icon fas fa-fax"></i>
                                <i className="contact_icon fab fa-facebook-f"></i>
                                <i className=" contact_icon fab fa-twitter"></i>
                                <i className=" contact_icon fab fa-youtube-square"></i>
                                <i className="contact_icon fab fa-linkedin-in"></i>
                                <i className="contact_icon fab fa-behance"></i>
                            </div>
                        </div>
                        <div className="col-md-6 form_c form_control">
                            <div className="form_c">
                                <div className="contact_r-name">
                                    <input className="contact_i subject" type="text" placeholder="Name" />
                                </div>
                                <div className="contact_r-name">
                                    <input className="contact_i subject" type="text" placeholder="Email" /> 
                                </div>
                                <div>
                                    <input className="contact_i subject" type="text" placeholder="Subject" />
                                </div>
                                <div>
                                    <textarea className="textarea" type="massege" />
                                </div>
                                <div>
                                    <input type="submit" className="submit" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="googlemap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.9708976340467!2d69.26903211492677!3d41.37471700474437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d3a6e2eb289%3A0x8f7b877ac9078717!2sKalibri%20education%20I%20Colibri%20education!5e0!3m2!1sru!2s!4v1627807526031!5m2!1sru!2s" className="iframe" width="100%" height="450"   loading="lazy"></iframe>
            </div>
            <div className="footer">
                <p>Copyright © 2019 CVIT. All Rights Reserved.</p>
            </div>
        </div>
    );
};


export default Contacts;