import React from 'react'

function Footer() {
    return (
        <div >
            <div className="container-fluid"style={{position:"relative",marginTop:"200px"}}>
                    <div className="row mt-5">
                        <div className="col-3">
                            <img src="/images/gas.png" alt="" style={{height:"450px"}} />
                        </div>
                        <div className="col-6">
                            <h2 className='text-center text-white'>CHERRI</h2>
                            <h2 style={{lineHeight:"5px"}} className='text-center mb-5 text-white'>LEARN</h2>
                            <p className='text-center'>CherryLearn Education interesting activities in English and Kannada based on textbooks, technology systems to <br />
                            complement modern education grammar to boost confidence,</p>

                            <h4 className='text-center'>DOWNLOAD TODAY</h4>
                            <div className="row">
                                <div className="col">
                                <img
                                    src="/images/app.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{ width: 110,marginLeft:"60%" }}
                                    />
                                </div>
                                <div className="col">
                                <img
                                    src="/images/google.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{ width: 120 }}
                                    />
                                </div>
                            </div>
                            <ul className='mt-4' style={{listStyleType:"circle"}} >
                                <li style={{display:'inline-block',marginRight:"15px",marginLeft:"30px"}}>ABout US</li>
                                <li style={{display:'inline-block',marginRight:"15px"}}>Careers</li>
                                <li style={{display:'inline',marginRight:"15px"}}>Privacy Police</li>
                                <li style={{display:'inline',marginRight:"15px"}}>Terms & Conditions</li>
                                <li style={{display:'inline',marginRight:"15px"}}>Contact Us</li>
                            </ul>

                            <div className="row">
                               <div className="col">
                                <img src="/images/tww.png" alt="" style={{height:"40px",width:"40px",float:"left",marginLeft:"250px",marginRight:"20px"}}/>
                                <img src="/images/ins.png" alt="" style={{height:"40px",width:"40px",float:"left",marginRight:"20px"}}/>
                                <img src="/images/ll.png" alt="" style={{height:"40px",width:"40px",float:"left",marginRight:"20px"}}/>
                                <img src="/images/ff.png" alt="" style={{height:"40px",width:"40px",float:"left"}}/>
                               </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className='mt-3' src="/images/pencilsit.jpg" alt="" style={{height:"250px"}}/>
                        </div>
                    </div>
            </div>

           
        </div>
    )
}

export default Footer

