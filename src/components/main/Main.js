import './Main.css';


function Main () {
    return (
        <div style={{backgroundColor:"#DBA5FF"}}>
            <div className="container">
                <div className="row py-5">
                    <div className="col-5">
                        <h1> <span style={{color:"purple"}}>1</span> to <span  style={{color:"aqua"}} >5</span> Standard <br />
                        Activity Based</h1>
                        <p className='text-white'>CherryLearn Education interesting activities in English and Kannada based 
                            on textbooks, technology systems to complement modern education grammar t
                            o boost confidence,</p>

                            <p className='text-white mb-4'>Choose your Medium</p>
                            <button className='btn shadow-lg  mb-5 ms-2 rounded text-white' style={{borderRadius:"32px" ,backgroundColor:"purple"}}>English</button>
                            <button className='btn ms-3 shadow-xl  mb-5  rounded' style={{borderRadius:"32px" ,backgroundColor:"white"}}>Kannad</button>
                    </div>
                    <div className="col">
                        <img src="/images/abc.png" alt="" style={{marginLeft:"50%"}}/>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col "style={{marginLeft:"100px"}}>
                        <div className="circle ms-5" style={{borderRadius:"50%",overflow:"hidden",width:"40px",height:"40px",backgroundColor:"white"}}>
                            <img className="ms-2" src="/images/books.png" alt="" style={{width:"25px"}} />
                        </div>
                        <h4 className='mt-2'style={{marginLeft:"38px"}}>3000+</h4>
                        <p> Number of students</p>
                    </div>
                    <div className="col">
                        <div className="circle ms-5" style={{borderRadius:"50%",overflow:"hidden",width:"40px",height:"40px",backgroundColor:"white"}}>
                            <img className="ms-2" src="/images/books.png" alt="" style={{width:"25px"}} />
                        </div>
                        <h4 style={{marginLeft:"38px"}}>25000+</h4>
                        <p className='ms-3'>Number of Topics</p>
                    </div>
                    <div className="col">
                        <div className="circle ms-5" style={{borderRadius:"50%",overflow:"hidden",width:"40px",height:"40px",backgroundColor:"white"}}>
                            <img className="ms-2" src="/images/house.png" alt="" style={{width:"25px"}} />
                        </div>
                        <h4 style={{marginLeft:"50px"}}>25+</h4>
                        <p>No. of Cities Reached</p>
                    </div>
                    <div className="col">
                        <div className="circle" style={{borderRadius:"50%",overflow:"hidden",width:"40px",height:"40px",backgroundColor:"white"}}>
                            <img className="ms-2" src="/images/rate.png" alt="" style={{width:"25px"}} />
                        </div>
                        <h4 className='ms-2'>5+</h4>
                        <p>App rate</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Main;