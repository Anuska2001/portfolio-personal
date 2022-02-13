import React,{useState} from 'react';
import Typed from 'react-typed';
import image from '../static/background.jpeg';

const Header = () => {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        I am a resilient individual
      </p>
      <p className="extra-content">
        with a tilt towards Technology and Science.
      </p>
      <p className="extra-content">
        Music motivates me to the path of Life.
      </p>
      <p className="extra-content">
        A newbie in the world of coding.
      </p>
      <p className="extra-content">
      Also, being a keen learner and a youngster, I can work to the best of my potential in a faster and in a more relevant manner.
      </p>
  </div>
  const linkName=readMore?'Show Less':'Read More'
  return (
    <div className='header-wraper'>
        <div className='main-info'>
          <div className='div'>
          <img className='profilePic' src={image} alt=''></img>
          </div>
          
            <h1 className='heading'>Hello!</h1>
            <p className='typed-text'>My name is Anuska Sarkar</p>
            <Typed 
                className='typed-text'
                strings={["I am a Computer Science Engineering Student at SMIT", "Musicholic", "Enthusiastic Learner", "Rain and Coffee >>>>> Netflix and Chill"]}
                typeSpeed={40}
                loop
            />
            <p className='typed-text'>Just an Engineer trying to work Harder everyday.</p>
            {readMore && extraContent}
            <button className="btn-main-offer" onClick={()=>{setReadMore(!readMore)}}>{linkName}</button>
            
        </div>

    </div>
  )
}

export default Header