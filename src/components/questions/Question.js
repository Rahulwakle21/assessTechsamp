import React from 'react'
import '../questions/Question.css'

export default function Question() {
    return (
        <div style={{backgroundColor:"	rgb(203, 195, 227)",paddingTop:"20px" ,marginTop:"20px",height:"1000px"}}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <img className='mt-5 ms-5' src="/images/mobijfif.jfif" alt="" style={{height:"350px"}}/>
                    </div>

                    <div className="col">
                        <h2>Frequently Asked <span style={{color:"purple"}}>Questions</span></h2>

                        <ul className='list-group mt-3'>
                        <li class="list-group-item active" aria-current="true">What is CherryLearn ?</li>
                        </ul>
                        <p className='mt-3' style={{lineHeight:"30px"}}>CherryLearn has thousands of interactive and interesting activities in English and Kannada based on
                        textbooks, technology systems to complement modern education, mock tests and useful quizzes and
                        grammar to boost confidence.</p>
                        <ul className='list-group mt-3'>
                        <li class="list-group-item " aria-current="true">How much does it cost annually to use CherryLearn?</li>
                        </ul>
                        <ul className='list-group mt-3'>
                        <li class="list-group-item " aria-current="true">Do children need their own mobile to use CherryLearn?</li>
                        </ul>
                        <ul className='list-group mt-3'>
                        <li class="list-group-item " aria-current="true">Can CherryLearn be used on any mobile from the entered number?</li>
                        </ul>
                    </div>
                </div>
          

            <div className="row" style={{marginTop:"50px"}}>
                <h2 className='text-center mb-5' ><span style={{color:"purple"}}>Sustainable</span> Developmemnt Goals</h2>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/7.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/sun-energy.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/6.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/water.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/5.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/gender-equality.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/1.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/fam.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/2.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/soup.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/3.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/good-heart.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="energy">
                    <div className="row">
                        <div className="col-2 mt-2"> <img src="/images/4.png" alt=""  style={{height:"30px"}}/></div>
                       
                        <div className="col"> 
                            <p className='text-white'>Affortable and clean energy</p>
                            <img src="/images/presentation.png" alt="" style={{height:"60px"}}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row mt-3">
                <h2 className='mt-4 text-center'>CherryLearn <span style={{color:"purple"}}>App</span></h2>

                <button className='btn mt-4 text-white'style={{backgroundColor:"rgb(165, 103, 223)",width:"150px",marginLeft:"45%"}}>Get Now App</button>
                    
                <div className="row mt-3">
                <img  src="/images/app.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{ width: 110,marginLeft:"43%" }}
                                    />
                <img src="/images/google.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{ width: 120 }}
                                    />
                </div>
            </div>
        </div>
    )
}
