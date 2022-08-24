import React from 'react'
// import fontawesome from '@fortawesome/fontawesome'

export default function Potential() {
    return (
        <div style={{height:"650px",backgroundColor:"white"}}>
            <div className="container" style={{paddingTop:"150px"}}>
                <div className="row">
                    <div className="col-5 mt-5 ms-5">
                        <h2>Encouraging <span style={{color:"purple"}}>Childern's <br />learning</span > potential
                        </h2>
                        <p className='mt-3'style={{lineHeight:"30px"}}>CherryLearn has thousands of interactive and interesting
                            activities in English and Kannada based on textbooks, technology
                            systems to complement modern education, mock tests and useful
                            quizzes and grammar to boost confidence.</p>
                            <button className='btn btn-info' style={{borderRadius:"31px",paddingRight:"15px"}}>Download </button>
                    </div>
                    
                    <div className="col"style={{marginLeft:"150px"}}>
                        <img src="/images/pott.png" className='shadow-lg p-3 mb-5  rounded' alt="" style={{height:"350px",opacity:"0.8"}}/>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
