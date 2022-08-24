import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="container" style={{marginTop:"100px"}}>
                <h2 className='text-center'> What's inside the <span style={{color:"purple"}}>Cherrilearn ?</span></h2>

                <div className="row" style={{marginTop:"100px"}}>
                    <div className="col-3 shadow-lg p-3 mb-5  rounded" style={{border:"1px ",padding:"5px",marginRight:"80px",marginLeft:"80px"}}>
                        <img src="/images/textbase.png" alt=""className='mt-3'  style={{marginLeft:"29%"}}/>
                        <h3 className='mt-3 text-center'>Text based activities</h3>
                        <p className='text-center mb-4'>Children can learn the text through thousands of
                            interactive activities while playing</p>
                    </div>
                    <div className="col-3 shadow-lg p-3 mb-5  rounded" style={{border:"1px ",padding:"10px",marginRight:"80px"}}>
                        <img src="/images/download.png" alt=""className='mt-3'  style={{marginLeft:"29%"}}/>
                        <h3 className='mt-3 text-center'>Interesting scenery</h3>
                        <p className='text-center mb-4'>Animated visuals make it easier for children to
                            understand the content of the text</p>
                    </div>
                    <div className="col-3 shadow-lg p-3 mb-5  rounded" style={{border:"1px ",padding:"10px"}}>
                        <img src="/images/textbase.png" alt=""className='mt-3'  style={{marginLeft:"29%"}}/>
                        <h3 className='mt-3 text-center'>Mock Test</h3>
                        <p className='text-center mb-4'>Hundreds of text-based mock tests remove
                            test fear in kids</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
