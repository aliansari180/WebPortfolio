import React from 'react';
import './Home.css';
import './Mainlayout.css';
import {  useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNav = () => {
    // Navigate to the portfolio page
    navigate('/portfolio');
  }


  return (
    <>
    {/* <div className='gif'>
      <img src="./ani.gif"  className='gifimg'  alt="" />

    </div> */}
<div class="ribbon"><a target="_blank" href="https://github.com/aliansari180" title="@aliansari180">FOLLOW ON GITHUB</a></div>


      <div class="game-lettering"><h3><span>Hello, my name is </span><strong>Ali Ansari</strong><span>.</span></h3><p><span>I am a </span><a title="Meta Certified" href="/">Meta Certified</a><span><img src="meta.png" className='meta' alt="" /></span>&nbsp;<span itemprop="specialty">Front-End Web developer and javascript specialist.</span></p><p><span>Check out my articles, React  UI components at the </span><a title="labs" href="/">code laboratory</a><span>.</span></p><p><span>Feel free to take a look at my latest projects on the </span><a itemprop="significantLink" href="/" title="web portfolio">web portfolio page</a><span>.</span></p><address><span>Remotely available </span><a title="Contact Email" href="mailto:muhammadaliansari180@gmail.com">muhammadaliansari180@gmail.com</a></address>


      </div>
      <div className="follow-me">
        <ul>
          <li>
            <a  href="https://github.com/aliansari180" title="Follow on GitHub">
              <img src="git2.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a  href="https://www.linkedin.com/in/ali-ansari-58567923b/" title="Connect on Linkedin">
              <img src="linkd.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a  href="https://www.instagram.com/muhammadaliansari180/" title="Follow on Instagram">
              <img src="insta.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>

      <div className="arrow-container" id="arrow" onClick={handleNav}>
        <span className="arrow-text">Portfolio</span>
        <img src="arr.png" alt="" className="arrow" />
      </div>
    </>

  )
}

export default Home;