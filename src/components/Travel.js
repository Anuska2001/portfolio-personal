import React from 'react'
import sister from "../static/7sister.jpg";
import chardham from "../static/chardham.jpg";
import darjeeling from "../static/darjeeling.jpg";
import dooars from "../static/dooars.jpg";
import kaziranga from "../static/kaziranga.jfif";
import mangroves from "../static/mangroves.jfif";
import neil from "../static/neil.jfif";
import rajasthan from "../static/rajasthan.jfif";
import ravangla from"../static/ravangla.jfif";
import rocky from "../static/rockyIsland.jpg";
import sela from "../static/selaPass.jpg"
import shilong from "../static/shilong.jfif"
import sukna from "../static/sukna.jfif"
import tawang from "../static/tawang.jfif"



const Travel = () => {
  return (
    <section class="cakes" id="cakes">
        <h1 className='project-text'>Let's take a look into my Travel Diaries!</h1>
        <div class="box-container">
         <div class="box">
             <img src={sister} alt=""></img>
             <h3>Seven Sister Falls, Meghalaya</h3>
         </div>
         <div class="box">
             <img src={chardham} alt=""></img>
             <h3>Chardham, Ravangla</h3>
         </div>
         <div class="box">
             <img src={darjeeling} alt=""></img>
             <h3>Darjeeling</h3>
         </div>
         <div class="box">
             <img src={dooars} alt=""></img>
             <h3>Dooars</h3>
         </div>
         <div class="box">
             <img src={kaziranga} alt=""></img>
             <h3>Kaziranga National Forest, Assam</h3>
         </div>
         <div class="box">
             <img src={mangroves} alt=""></img>
             <h3>Mangrove Forest, Andaman</h3>
         </div>
         <div class="box">
             <img src={neil} alt=""></img>
             <h3>Neil Island, Andaman</h3>
         </div>
         <div class="box">
             <img src={rajasthan} alt=""></img>
             <h3>Rajasthan</h3>
         </div>
         <div class="box">
             <img src={ravangla} alt=""></img>
             <h3>Buddha Temple, Ravangla</h3>
         </div>
         <div class="box">
             <img src={rocky} alt=""></img>
             <h3>Rocky Island, Dooars</h3>
         </div>
         <div class="box">
            <img src={sela} alt=""></img>
            <h3>Sela Pass, Arunachal Pradesh</h3>
        </div>
        <div class="box">
            <img src={shilong} alt=""></img>
            <h3>Shilong</h3>
        </div>
        <div class="box">
            <img src={sukna} alt=""></img>
            <h3>Sukna Forest, Siliguri</h3>
        </div>
        <div class="box">
            <img src={tawang} alt=""></img>
            <h3>Tawang, Arunachal Pradesh</h3>
        </div>
 
     </div>
 
    </section>
  )
}

export default Travel