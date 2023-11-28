import React from 'react'
import PausedVideoIcon from './Pause'
import Fifa from '../assets/Fifa.jpg';
import CommentSection from './Comment';

const Preview = () => {
    return (
        <div className="m-8 p-8 bg-white">
          <PausedVideoIcon />
        <img src={Fifa} alt="Fifa World Cup" className='py-8' />
        
            <CommentSection/>
      </div>
    );
}

export default Preview
