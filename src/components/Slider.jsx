import React, { useState } from 'react';
import './Slider.css';

function Slider() {
  const [angle, setAngle] = useState(0);

  function galleryspin(sign) {
    if (!sign) {
      setAngle((prevAngle) => prevAngle + 45);
    } else {
      setAngle((prevAngle) => prevAngle - 45);
    }
  }

  const spinnerStyle = {
    WebkitTransform: `rotateY(${angle}deg)`,
    MozTransform: `rotateY(${angle}deg)`,
    transform: `rotateY(${angle}deg)`,
  };

  return (
    <>
      {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" /> */}
      <div id="carousel">
        <figure id="spinner" style={spinnerStyle}>
        
          <img src="news.png" alt='' />
          <img src="todo.png" alt='' />
          <img src="textutil.png" alt='' />
          <img src="todo.png" alt='' />
          <img src="news.png" alt='' />
          <img src="textutil.png" alt='' />
          <img src="todo.png" alt='' />
          <img src="news.png" alt='' />
         
        </figure>
      </div>
      

     <span style={{ float: 'left' }} className="ss-icon" onClick={() => galleryspin()}>
       &lt;
</span>
<span style={{ float: 'right' }} className="ss-icon" onClick={() => galleryspin()}>
  &gt;
</span>
      



    </>
  );
}

export default Slider;
