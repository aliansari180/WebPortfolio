import React from 'react';
import  './Certificate.css'
import {  useNavigate } from 'react-router-dom';


function Certificates() {
    const navigate = useNavigate();

    const handleNav = () => {
        // Navigate to the portfolio page
        navigate('/portfolio');
      }
    const moveNav = () => {
        // Navigate to the portfolio page
        navigate('/contact');
      }
    
  return (
    <>
    <div class="ribbon"><a  href="https://github.com/aliansari180" title="@aliansari180">FOLLOW ON GITHUB</a></div>

    <div className="arrow-container" id="arrow" onClick={moveNav}>
        <span className="arrow-text">Contact</span>
        <img src="arr.png" alt="" className="arrow" />
      </div>

        <div className="arrow-container1" id="arrow" onClick={handleNav}>
        <span className="arrow-text1">portfolio</span>
        <img src="arr.png" alt="" className="arrow1" />
      </div>

<div>
    <h2 className='heading'>Certifications</h2>
</div>
   <div className='MainCertificates'>

  <div>
    <a href='https://www.coursera.org/account/accomplishments/professional-cert/BQMFKV92HL4B'>
    <img src="metacert.jpg"  alt="certificate" />
    </a>
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/L4G53FBT2334">
    <img src="intro.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/78CM6BGKNG2V">
    <img src="introjs.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/78SZQH3UVGUB">
    <img src="htmlcss.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/6983ZLP6FTWX">
    <img src="uiux.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/8KH2KYT5DJPS">
    <img src="reactbasic.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/RQ25KRDPLVDL">
    <img src="version.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/CBHTYNAN877D">
    <img src="advancedreact.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/KBG5PA7YZ83E">
    <img src="capstone.jpg" alt="certificate" />
    </a>
  </div>
  <div>
    <a href="https://www.coursera.org/account/accomplishments/verify/HJ6MEKKZ6SUB">
    <img src="interview.jpg" alt="certificate" />
    </a>
  </div>
</div>
  </>
  );
}

export default Certificates;
