import React from 'react'

export default function Learning() {
    return (
        <div>
            <div className="container" style={{marginTop:"100px"}}>
                <h2 className='text-center'>An interesting</h2>
                <h2 className='text-center mb-4' style={{color:"purple"}}>Design For Learning</h2>

                <div className="box" style={{width:"800px",border:"1px solid",marginLeft:"20%",backgroundColor:" rgb(156, 74, 233)",height:"600px"}}>
                    <h4 className='text-center mt-4'>Subject</h4>
                    <p className='text-center'> Select the Class to check your subject</p>
                    <input type="number" placeholder='1' style={{marginLeft:"25%",borderRadius:"31px",padding:"2px"}}/> 
                    <input type="text" name="" id="" placeholder='kannad English' style={{marginLeft:"20px",borderRadius:"31px",padding:"2px"}}/>
                    
     

                    <div className="container-fluid mt-3">
                        <div className="row">
                            <div className="col-sm-12">
                            <div id="inam"className="carousel slide"data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                                <div className="col-sm-12 col-lg-3 ms-5">
                                                    <div className="card"style={{width:"200px"}}>
                                                        <img src="/images/boy.webp" alt=""  className='card-img-top' style={{height:"200px"}}/>
                                                        <div className="card-body">
                                                            <h4 className='card-footer text-center'>EVS</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-lg-3 ms-4">
                                                    <div className="card"style={{width:"200px"}}>
                                                        <img src="/images/boy.webp" alt=""  className='card-img-top' style={{height:"200px"}}/>
                                                        <div className="card-body">
                                                            <h4 className='card-footer bg-info text-center'>ENGLISH</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-lg-3 ms-4">
                                                    <div className="card"style={{width:"200px"}}>
                                                        <img src="/images/boy.webp" alt=""  className='card-img-top' style={{height:"200px"}}/>
                                                        <div className="card-body">
                                                            <h4 className='card-footer text-center'>Kannada</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                                <a href="#inam" className="carousel-control-prev" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a href="#inam" className="carousel-control-next" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
