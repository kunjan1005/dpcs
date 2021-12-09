import React,{useEffect,useState} from 'react'
import $ from 'jquery'
import { useParams } from 'react-router'
import { isUserLoging } from '../authorization/useAuth'
import env from '../env'
import axios from 'axios'
const Restaurant = () => {
    let restaurant_id=useParams('sid')
    useEffect(async()=>{
        let userData=isUserLoging()
        let {user_id,lang,latitude,longitude,access_token}=userData.user
        let response=await axios.post(`${env.URL}/dipicious/api/user/restaurant_detail`,
             JSON.stringify({user_id,lang,latitude,longitude,access_token,restaurant_id}),{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic cm9vdDoxMjM='
                }
             })
        console.log(response)
    },[1])
    return (<>
        <div className="container-fluid mt-2 mb-3">
            <div className="row no-gutters">
                <div className="col-md-5 pr-2">
                    <div className="res-card">
                        <div className="demo">
                            <ul id="lightSlider">
                                <li data-thumb="https://i.imgur.com/KZpuufK.jpg"> <img src="https://i.imgur.com/KZpuufK.jpg" /> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="res-card mt-2">
                        <h6>Reviews</h6>
                        <div className="d-flex flex-row">
                            <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1 font-weight-bold">4.6</span>
                        </div>
                        <hr />
                        <div className="res-badges"> <span className="badge bg-dark ">All (230)</span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
                        <hr />
                        <div className="res-comment-section">
                          
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="res-card">
                        <div className="d-flex flex-row align-items-center">
                            <div className="res-p-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1">5.0</span>
                        </div>
                        <div className="res-bout"> <span className="font-weight-bold">IKEA x HAY Ypperlig Collection </span>
                            <h4 className="font-weight-bold">$3,444</h4>
                        </div>
                        <div className="res-buttons"> <button className="btn btn-outline-warning btn-long res-cart">Add to Cart</button> <button className="btn btn-warning btn-long buy">Buy it Now</button> <button className="btn btn-light res-wishlist"> <i className="fa fa-heart"></i> </button> </div>
                        <hr />
                        <div className="res-product-description">

                            <div className="mt-2"> <span className="font-weight-bold">Description</span>
                                <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds.Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                                <div className="bullets">
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="res-card mt-2"> <span>Similar items:</span>
                        <div className="res-similar-products mt-2 d-flex flex-row">
                            <div className="res-card border p-1" style={{width:"9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className="card-img-top" alt="..."/>
                                <div className ="res-ard-body">
                                <h6 className ="card-title">$1,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1"  style={{width:"9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/GwiUmQA.jpg" className="card-img-top" alt="..."/>
                                <div className ="card-body">
                                <h6 className ="card-title">$1,699</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1"  style={{width:"9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/c9uUysL.jpg" className="card-img-top" alt="..."/>
                                <div className ="card-body">
                                <h6 className ="card-title">$2,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1"  style={{width:"9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/kYWqL7k.jpg" className="card-img-top" alt="..."/>
                                <div className ="card-body">
                                <h6 className ="card-title">$3,999</h6>
                                </div>
                            </div>
                            <div className="res-card border p-1" style={{width:"9rem"}}> <img src="https://i.imgur.com/DhKkTrG.jpg" className="card-img-top" alt="..."/>
                                <div className ="card-body">
                                <h6 className ="card-title">$999</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Restaurant