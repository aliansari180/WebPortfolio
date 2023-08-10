import './Portfolio.css'
import {  useNavigate } from 'react-router-dom';
import Slider from './Slider';
import React from 'react';
import ImageGallery from './ImageGallery';

const images = [
  { src: 'textutil.png' },
  { src: 'news.png' },
  { src: 'textutil.png' },
  { src: 'todo.png' },
  { src: 'news.png' },
  // Add more images here
];

function Portfolio() {
    const navigate = useNavigate();

    const handleNav = () => {
        // Navigate to the portfolio page
        navigate('/');
      }
    const moveNav = () => {
        // Navigate to the portfolio page
        navigate('/certificates');
      }
    return(
    
        <>
        
<div class="ribbon"><a  href="https://github.com/aliansari180" title="@aliansari180">FOLLOW ON GITHUB</a></div>
<div className='game-lettering1'>

        <h1>web developer portfolio</h1>
</div>
<div className='scroll'>

        <p className='scroll'>scroll down</p>
      
</div>
        <img src="arr.png" alt="" className="arrow2" />
      <Slider/>

<div className="arrow-container" id="arrow" onClick={moveNav}>
        <span className="arrow-text">Certificates</span>
        <img src="arr.png" alt="" className="arrow" />
      </div>

        <div className="arrow-container1" id="arrow" onClick={handleNav}>
        <span className="arrow-text1">About</span>
        <img src="arr.png" alt="" className="arrow1" />
      </div>

       


      <div>
      <ImageGallery images={images} />
    </div>
        </>
    )
    
}

export default Portfolio;