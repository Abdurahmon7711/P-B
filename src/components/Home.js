import React from 'react';
import { useEffect } from 'react';
// import axios from 'axios';


const Home = () => {

    // useEffect(()=>{
    //     // axios({
    //     //     url:"https://jsonplaceholder.typicode.com/users",
    //     //     method:'get'
    //     // }).then((res)=>{
    //     //         console.log(res.data)
    //     // })

    //     axios({
    //         url:"https://hoji.pythonanywhere.com/post/2/?format=json",
    //         method:'get'
    //     }).then((res)=>{
    //             console.log(res)
    //     })


    // } , [])

    return (
        <div>
            <div className="home container">
                <div className="home_text">
                    <p>
                        <b className="lets">LET'S</b> BUILD <b className="lets"> SOMETHING </b> <br/> 
                         GREAT <b className="lets">TOGETHER</b>
                    </p>
                    <p>
                        I'm the pixel crafter based in <br/>
                        <b className="lets">#Bangladesh.</b>I make the visual for web <br/>
                        and mobile application to be more <br/>
                        interactive
                    </p>
                    <button className="home_btn"><b>Let's talk</b></button>
                </div>
            </div>
        </div>
    );
};


export default Home;