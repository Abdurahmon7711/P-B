import React, { useEffect, useState } from 'react';
import Menu from './main';
import Fade from 'react-reveal/Fade';
// import axios from "axios";





const Awesome = () => {



    const [show, setShow] = useState(true)
    const [items, setItem] = useState(Menu)
    const [data1, setData] = useState('')

    // function doPosts (){
    //     return axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => {
    //         setData(res.data)
    //     })
    // }


    const itemFiltr = (categitem) => {
       
        const UpdateItems = Menu.filter((curElement) => {
            return curElement.catigorio === categitem;
            
        });
        setShow(!show)
        setItem(UpdateItems);
    }
    useEffect(() => {
      if(!show && items) {
          setShow(!show)
      } 
      console.log(data1);
    },  )
 
    

    return (
        <div id="awesomes">
            <div className="Avesome container">

                <div>
                    <h1 className="about_me">AWESOME WORKS</h1>
                    <span className="line"></span>
                    <span className="long_line"></span>
                    <span className="line"></span>
                </div>

                <div className="awesom_button">
                    <button className=" awesome_btn" onClick={() => setItem(Menu)}>All projcts</button>
                    <button className=" awesome_btn" onClick={() => itemFiltr('ichimlik')}>websit </button>
                    <button className=" awesome_btn" onClick={() => itemFiltr('yegulik')}>Application</button>
                    <button className=" awesome_btn" onClick={() => itemFiltr('tavar')}>Illustation</button>
                    <button className=" awesome_btn" onClick={() => itemFiltr('yegulik')}>Logo</button>
                    <button className=" awesome_btn" onClick={() => itemFiltr('tavar')}>Print design</button>
                </div>
                {

                }
                
                <div className="menu-items container mt-5">
                    <div className="row my-5">
                        {
                            items.map((elem, index) => {
                                const { id, namee, catigorio, prise, descreption, img } = elem;
                                return (
                                    <Fade bottom   key={index} when={show}>
                                        <div className="col-md-3 mb-4 item3">
                                            <div className="card writing_card">
                                                <div className="card-header project-hed">
                                                    <img className="product-img" src={img} />
                                                    <div className="bgflov">
                                                        <h5>Project name</h5>
                                                        <p>Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do</p>
                                                        <a href="#" className="view_btn"> VIEW PROJECT</a>
                                                    </div>
                                                    <div className="bgcolor"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awesome;





// <h1>

// <butto
//     type="button"
//     onClick={handleClick}>
//     aaaa
// </butto>
// </h1>






// <div className="row partfolio">
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//             <div className="catd_text">
//                 <h4 className="card_Text_size">Project title</h4>
//                 <p > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus </p>
//                 <button className="card_Text_size card_btn">view Project</button>
//             </div>
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card- card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// </div>

// <div className="row partfolio">
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card- card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// <div className=" col-md-3">
//     <div classNames="card">
//         <div className="card-body card_b">
//             <img src={imgpart} className="cardimg" />
//         </div>
//     </div>
// </div>
// </div>