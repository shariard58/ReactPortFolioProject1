import React from 'react'
import './body.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Body() {


    const [userinfo, setUserInfo] = useState([])


    useEffect(() => {
        const url1 = "https://api.github.com/users/shahnewaz007";

        const fetchData = async () => {
            try {
                const response = await fetch(url1);
                const json = await response.json();
                console.log(json)

                setUserInfo(json)
            } catch (error) {
                console.log("error", error);
            }
        };




        fetchData();

    }, []);



    const [products, setProducts] = useState([])
    // const [userinfo, setUserInfo] = useState([])



    useEffect(() => {
        const url = "https://api.github.com/users/shahnewaz007/repos";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProducts(json)
            } catch (error) {
                console.log("error", error);
            }
        };




        fetchData();
    }, []);



    console.log(products.length);

    return (


        <div className='row banner' style={{ backgroundImage: `url("assests/background.jpg")` }}>

            <div className="column leftb" >

                <p className='firstText'> Speed Up <br />  Communications </p>
                <h1 > Hi I am {userinfo.name}</h1> <br />

                <p className='randomText'> AU Studio is the place for everything related to a <br /> project , to do list or communication  </p>

                <button > Hire Me </button>


                <div className='socialIcon'>

                    <a > <img src="assests/instagram.jpg"></img>  </a>
                    <a> <img src="assests/facebook.png"></img> </a>
                    <a>  <img src="assests/twitter icon.png"></img> </a>


                </div>






            </div>

            <div className="column rightb" >


                <div className='row'>

                    <div className='column innerLeft'>



                        <div className="card">

                            {/* <img class="imgClass" src="/assests/CardImage.png" alt="Logo" /> */}

                            {/* <img src={userinfo.avatar_url} alt="Logo" /> */}

                            <div className="card-body">

                                <div className="card-title">
                                    <h1> {products.length}</h1>
                                    <h2> Great Project Done </h2>
                                </div>

                                <div className="card-desc">
                                    {/* <h2>
            <a href={post.clone_url}> github Link</a>
        </h2> */}
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className='column innerRight'>


                        <div className="nav-logo ">

                            <img className='profileImage' src={userinfo.avatar_url} alt="Logo" />

                        </div>


                    </div>

                </div>







            </div>
        </div>
    )
}
