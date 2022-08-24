import React from 'react'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#DBA5FF"}}>
  <div className="container-fluid">
    <a  className="navbar-brand text-white ms-5" href="#">
    <h2 className='text-center text-white'>CHERRI</h2>
                            <h2 style={{lineHeight:"5px"}} className='text-center mb-5 text-white'>LEARN</h2>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      
    <ul class="nav ">
  <li class="nav-item">
    <a className="nav-link text-white " aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a className="nav-link text-white" href="#">About</a>
  </li>
  <li class="nav-item">
      <img className='mt-2 me-3' src="/images/search.png" alt="" style={{width:"20px",height:"25px"}} />
  </li>
  
    <button className='btn btn-info me-5'>ContactUs</button>
</ul>
    </div>
  </div>
</nav>

    </div>
    )
}

export default Navbar
