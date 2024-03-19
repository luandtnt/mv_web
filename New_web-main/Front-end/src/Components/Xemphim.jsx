// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../App.css'
function Xemphim() {
  return (
    <div className="cha1">
      <div className="boder1">
        <video controls>
          <source src="src/video/gung.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Xemphim;
