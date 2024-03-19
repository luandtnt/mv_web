import { useState } from 'react';
function Play() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='content_btns'>
      <a href='#' id='play' className='content_btns_a' onClick={handleButtonClick}>
        {isPlaying ? 'Play' : 'Watch'}
        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`} style={{ marginRight: '5px' }}></i>
      </a>
      
      <a href='#' id='download_main' className='content_btns_a'>
        <i className="bi bi-cloud-arrow-down-fill" style={{ marginRight: '5px' }}></i>
      </a>
    </div>
  );
}

export default Play;