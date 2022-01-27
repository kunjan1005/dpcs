import React from 'react'
import { NavLink } from 'react-router-dom'
import foodImg from '../images/placeholder.svg'

const Order1 = () => {
    return (
        <div className='mainClass'>
            <div className='container'>
                <div className='row firstimg'>
                    <div className='col-lg-3 col-md-3 col-sm-3 col-12'>
                        <img src={foodImg} className='img1'></img>
                    </div>

                    <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                        <h1>Domino's Pizza دومينوز بيتزا - Kuwait City West</h1>
                        <p>25 min ·<span></span> Pizza ·<span></span> Italian</p>

                        <p>
                            <svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-ed34b65f78f16205" fill="#d31f33"><path d="M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z"></path></svg>
                            <span> 4.3 Very good</span> · <span> (500+)</span> · <span> 10.73 km away</span> · <span> Free delivery</span> · <span> KD 3.500</span> <span style={{ marginLeft: '27px' }}>minimum</span>
                        </p>

                        <p>
                            <svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-abe5c41af1b9498e ccl-1e6f880f67285c2e" fill="#d31f33"><path d="M12 2C17.5228 2 22 6.47717 22 12C22 17.5228 17.5228 22 12 22C6.47717 22 2 17.5228 2 12C2 6.47717 6.47717 2 12 2ZM12 20C16.4112 20 20 16.4112 20 12C20 7.5888 16.4112 4 12 4C7.5888 4 4 7.5888 4 12C4 16.4112 7.5888 20 12 20ZM11 17V10H13V17H11ZM11.9934 6.69997C12.7444 6.69997 13.2846 7.22697 13.2846 7.91205C13.2846 8.59722 12.7444 9.13738 11.9934 9.13738C11.2556 9.13738 10.7155 8.59722 10.7155 7.91205C10.7155 7.22697 11.2556 6.69997 11.9934 6.69997Z"></path></svg>
                            <span> Info</span><span> <NavLink to=""><svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-ed34b65f78f16205 ccl-c738ab1fde928049"><path d="M7.11621 19.1161L8.88398 20.8839L17.7679 12L8.88398 3.11612L7.11621 4.88389L14.2323 12L7.11621 19.1161Z"></path></svg></NavLink></span>
                        </p>

                        <p>
                            <svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-abe5c41af1b9498e ccl-1e6f880f67285c2e" fill="#d31f33"><path d="M18 17.5C18 18.3272 18.6729 19 19.5 19C20.3271 19 21 18.3272 21 17.5C21 16.6729 20.3271 16 19.5 16C18.6729 16 18 16.6729 18 17.5ZM5.3 15H10.4L9.4 11.2C7.51643 11.7024 5.96055 13.1418 5.3 15ZM6 17C6 18.1028 6.89717 19 8 19C9.10283 19 10 18.1028 10 17H6ZM10 9H11.1L12.5 15H17.1C17.2812 14.7495 17.5412 14.5548 17.8 14.4L15.9 7H17.9L18.3172 8.53691C18.5665 8.20869 18.9409 8 19.3594 8H21V11H19.3594C19.2236 11 19.0924 10.978 18.9686 10.9371L19.8 14C21.584 14.1289 23 15.6407 23 17.5C23 19.4266 21.433 21 19.5 21C17.567 21 16 19.4266 16 17.5C16 17.3151 16.0127 17.1476 16 17H12C12 19.1983 10.2056 21 8 21C5.79442 21 4 19.1983 4 17H3C3 14.5841 4.04808 12.4308 5.7 11H3L2 10V4L3 3H9L10 4V9Z"></path></svg>
                            <span> Delivered by Domino's Pizza دومينوز بيتزا - Kuwait City West This </span><span style={{ marginLeft: '27px' }}>means you won’t be able to follow your order or get live updates</span>
                        </p>
                    </div>

                    <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                        <p className='text-right'>
                            <img src="https://img.icons8.com/color/50/000000/cycling-road--v1.png" />
                            <span> Deliver in around 25 min</span>
                            <span>
                                <button type="button" class="btn change" data-toggle="modal" data-target="#myModal">Change</button>

                                <div class="modal fade" id="myModal" role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title text-left">Where and When</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="radio" style={{ verticalAlign: 'middle' }} selected /> Delivery
                                                <div className=''>
                                                    <svg height="16" width="16" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-abe5c41af1b9498e ccl-1e6f880f67285c2e"><path d="M11.9998 2C14.3002 2 16.6006 2.89705 18.3998 4.7C21.8662 8.27891 21.8662 14.0961 18.3998 17.6C18.3558 17.6841 15.5736 20.6156 11.9998 23C8.42535 20.6156 5.64374 17.6841 5.59978 17.6C2.13341 14.0961 2.13341 8.27891 5.59978 4.7C7.39894 2.89705 9.69938 2 11.9998 2ZM7.5323 16.7321C7.89418 17.0953 8.33365 17.5151 8.81984 17.9563C9.82886 18.8719 10.9021 19.7578 11.9997 20.5601C13.0972 19.7578 14.1704 18.8718 15.1795 17.9562C15.6658 17.515 16.1053 17.0952 16.4673 16.732C16.5746 16.6244 16.6692 16.5275 16.7452 16.448L16.978 16.1934C19.6725 13.4697 19.6759 8.90387 16.9735 6.10213C15.5975 4.72861 13.8305 4 11.9998 4C10.1691 4 8.40203 4.72861 7.02607 6.10213C4.32367 8.90387 4.3271 13.4697 7.02159 16.1934L7.23308 16.4072C7.33038 16.5276 7.42503 16.6245 7.5323 16.7321ZM11.9998 9.6C13.1044 9.6 13.9998 10.4954 13.9998 11.6C13.9998 12.7046 13.1044 13.6 11.9998 13.6C10.8952 13.6 9.99978 12.7046 9.99978 11.6C9.99978 10.4954 10.8952 9.6 11.9998 9.6Z"></path></svg>
                                                    <span> Zahra Kuwait</span>
                                                    <span>
                                                        {/* change button */}
                                                    </span>
                                                    <p >
                                                        <svg height="16" width="16" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-abe5c41af1b9498e ccl-1e6f880f67285c2e"><path d="M13 12L15.2025 15.8789L13.4704 16.8789L11 12.6V6H13V12ZM12 2C17.5228 2 22 6.47717 22 12C22 17.5228 17.5228 22 12 22C6.47717 22 2 17.5228 2 12C2 6.47717 6.47717 2 12 2ZM12 20C16.4113 20 20 16.4113 20 12C20 7.58875 16.4113 4 12 4C7.58875 4 4 7.58875 4 12C4 16.4113 7.58875 20 12 20Z"></path></svg>
                                                        <span> Deliver in around 25 min</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='GroupOrderBtn text-right mr-2'>
                                    <button class="btn border">
                                        <svg height="24" width="24" viewBox="0 0 24 24" class="ccl-0f24ac4b87ce1f67 ccl-ed34b65f78f16205" fill="#d31f33"><path d="M11.6637 12.4466C13.0562 11.6816 14 10.201 14 8.5C14 6.01472 11.9853 4 9.5 4C7.01472 4 5 6.01472 5 8.5C5 10.201 5.9438 11.6816 7.3363 12.4466C4.48508 13.5922 2 16.7311 2 19.3846C2 19.6185 2.01931 19.8424 2.05647 20.0565L3 21H16L16.9435 20.0565C16.9807 19.8424 17 19.6185 17 19.3846C17 16.7311 14.5149 13.5922 11.6637 12.4466ZM12 8.5C12 9.88071 10.8807 11 9.5 11C8.11929 11 7 9.88071 7 8.5C7 7.11929 8.11929 6 9.5 6C10.8807 6 12 7.11929 12 8.5ZM13.19 15.8589C14.2374 16.9137 14.8339 18.0889 14.9699 19H4.0301C4.16611 18.0889 4.76258 16.9137 5.81002 15.8589C7.00225 14.6583 8.39696 14 9.5 14C10.603 14 11.9978 14.6583 13.19 15.8589Z"></path><path d="M13.4998 12.2749C13.877 11.8754 14.1951 11.4193 14.44 10.9205C14.6177 10.9723 14.8056 11 15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C14.9311 7 14.863 7.00349 14.7959 7.01029C14.6054 6.33189 14.2882 5.70656 13.8712 5.16149C14.2292 5.05639 14.608 5 15 5C17.2092 5 19 6.79086 19 9C19 10.0391 18.6038 10.9857 17.9541 11.6969C20.3438 12.8756 22 15.3903 22 18L21 19H17.9862C17.9385 18.3278 17.7688 17.6534 17.5074 17H19.8835C19.3853 14.8534 17.3514 13 15 13C14.8417 13 14.6848 13.0084 14.5297 13.0247C14.2014 12.7535 13.8569 12.502 13.4998 12.2749Z"></path></svg><span> Start Group Order</span>
                                    </button>
                                </div>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Order1