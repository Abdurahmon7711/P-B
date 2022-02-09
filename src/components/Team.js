import React from 'react';
import img1 from '../imgs/team/img2.jpg'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};


const Team = () => {
  return (
    <div id="teamid" className="team">
      <div className="container">
        <div className="team_title">
          <h1 className="about_me text-white">Team</h1>
          <span className="line bg-white "></span>
          <span className="long_line  bgw bg-white"></span>
          <span className="line bg-white"></span>
        </div>

        <div >

          <Slider {...settings}>
            <div className="border1">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>
            <div className="border1 ">
              <div className="card card_tim">
                <div className="card-header">
                  <img src={img1} />
                  <h5 className="m-2">Jams Kelivals</h5>
                  <p >WEB developer</p>
                </div>
              </div>
            </div>

          </Slider>
        </div>


        <div className="newslatter_input">
          <h2>SUBSCRIBE TO GET MY <br /> NEWSLETTER</h2>
          <input id="news_imput" type="text" placeholder="Eenter your email address" /><br />
          <button className="btn_subscrib">SUBSCRIBE</button>
        </div>

      </div>


    </div>
  );
};


export default Team;