import React from 'react'

export default function Support() {
    return (
        <div>
            <div className="container">
                <div className="row"style={{marginTop:"200px",marginBottom:"200px"}}>
                    <div className="col-5">
                        <img src="/images/support.jpg" alt="" style={{height:"300px"}}/>
                    </div>
                    <div className="col-6"style={{marginLeft:"80px"}}>
                        <h3>Support Child <span style={{color:"purple"}}>Education</span></h3>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry s standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries</p>

                            <button className='text-white' style={{borderRadius:"31px",backgroundColor:"#9933ff",border:" 2px white",width:"100px",padding:"2px"}}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
