import React from 'react';
import image2 from '../static/shopoholic.jpg';
import image1 from '../static/cooksheet.jpg';
import image3 from '../static/covid.jfif';
import image4 from '../static/phone.jfif';

const Project = () => {
  return (
    <section class="cakes" id="cakes">
    <h2 className='project-text'>Highlighted Projects</h2>
    <div className='box-container'>
    <div class="box">
                <h3>CookSheet</h3>
                <img src={image1} alt="step 1"></img>
                <br></br>
                <span>A full-stack website to promote all potential homecooks.</span>
                <h4> <a href='https://github.com/Anuska2001/cook-sheet'>Project Link</a></h4>
            </div>
            <div class="box">
                <h3>Shopoholic</h3>
                <img src={image2} alt="step 1"></img>
                <br></br>
                <span>A full-stack web application based on Flutter and Dart.</span>
                <h4> <a href='https://github.com/Anuska2001/Shopoholic'>Project Link</a></h4>
            </div>
            <div class="box">
                <h3>Covid-19 Trend Analysis</h3>
                <img src={image3} alt="step 1"></img>
                <br></br>
                <span>A python model to analyze the trend in covid 19</span>
                <h4><a href='https://github.com/Anuska2001/Covid-19_Trend_Analysis'>Project Link</a></h4>
            </div>
            <div class="box">
                <h3>Phone Usage Tracker</h3>
                <img src={image4} alt="step 1"></img>
                <br></br>
                <span>A full-stack website to track how long an user is on the phone.</span>
                <h4> <a href='https://github.com/Anuska2001/phone_usage_tracker'>Project Link</a></h4>
            </div>
        </div>
        </section>
  )
}

export default Project

