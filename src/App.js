import logo from './logo.svg';
import './App.css';
import reactVideo from "./web.json";
import lottie from "lottie-web";
import { useState, useEffect } from "react";



function App() {
  
useEffect(() => {
    let anim=lottie.loadAnimation({
      container: document.querySelector("#lottie"),
      animationData: reactVideo,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });   
  } , []);  
  return (
    <div className="App  ">
      <div className='container'>
        <svg width='130px' height='100px' className="logo-img" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 430.333 208">
        <defs><linearGradient id="linear-gradient" x1="0.539" y1="1" x2="0.5" y2="0.12" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#9c1971"></stop><stop offset="1" stop-color="#3d022a"></stop>
        </linearGradient><linearGradient id="linear-gradient-2" x1="0.5" x2="-0.482" y2="0.229" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#9c1971"></stop>
        <stop offset="0.644" stop-color="#f1ebef"></stop><stop offset="1" stop-color="#9c1971"></stop></linearGradient>
        <linearGradient id="linear-gradient-3" x1="1.207" y1="1.471" x2="0.176" y2="0.329" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#3430a4"></stop><stop offset="0.845" stop-color="#691579"></stop>
        <stop offset="0.941" stop-color="#691579"></stop><stop offset="1" stop-color="#9c1971"></stop></linearGradient>
        <linearGradient id="linear-gradient-4" x1="0.208" y1="0.75" x2="-0.333" y2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#9c1971"></stop><stop offset="0.753" stop-color="#f5f5f5"></stop>
        <stop offset="1" stop-color="#9c1971"></stop></linearGradient></defs>
        <g id="Group_64" data-name="Group 64" transform="translate(-1693 -657)"><g id="Group_57" data-name="Group 57" transform="translate(1780 626)"><path id="Rectangle_98" data-name="Rectangle 98" d="M0,0H32a0,0,0,0,1,0,0V64a0,0,0,0,1,0,0h0A32,32,0,0,1,0,32V0A0,0,0,0,1,0,0Z" transform="translate(-87 120)" fill="url(#linear-gradient)"></path><path id="Path_351" data-name="Path 351" d="M0-5.5C22.761-20.552,34.529,9.213,31.543,24.209h0C29.87,36.479,7.647,35.172,1.434,50.4c0,0-1.434,4.715-1.434,2.9Z" transform="translate(-87 102.302)" fill="url(#linear-gradient-2)"></path><path id="Path_359" data-name="Path 359" d="M153.752,92.163c3.534-12.348,11.161-40.231,11.161-46.6,0-8.763-5.394-13.344-11.905-13.344H139.615A361.5,361.5,0,0,1,121.943,106.9a318.546,318.546,0,0,1-15.067-53.176C104.272,40.978,95.529,36.4,87.53,36.4H78.043c-2.79,16.132-9.3,46.4-18.044,70.3C51.815,84.595,47.909,65.077,45.119,47.55c-1.3-7.17-6.7-15.535-15.625-15.535H14.24c4.836,39.633,16.927,82.055,32.925,112.527,4.278,8.564,10.045,8.763,13.207,8.763h6.511c9.859-17.526,18.23-39.833,23.438-61.143,5.208,20.115,12.463,39.633,19.16,52.38,4.278,8.564,9.673,8.763,12.463,8.763h6.883a312.248,312.248,0,0,0,24.926-60.944Zm90.4,3.187c0-21.908-16.741-35.849-34.6-35.849-24.182,0-41.482,19.12-41.482,48.994,0,27.883,20.648,45.608,41.668,45.608,23.81,0,31.437-9.361,31.437-21.908v-9.56c-10.789,6.373-20.09,8.166-27.716,8.166-9.115,0-16.369-4.182-18.788-11.95h9.487C232.251,118.851,244.156,113.075,244.156,95.349Zm-24-2.589c0,3.983-3.534,5.577-20.276,5.577h-6.139C194.3,90.171,199.7,82.8,207.883,82.8,215.323,82.8,220.16,86.188,220.16,92.76Zm125.747,12.348c0-26.688-16.369-45.608-38.319-45.608A26.238,26.238,0,0,0,288.8,67.467V44.961c0-11.95-6.325-17.526-15.625-17.526h-9.487V108.1c0,27.086,18.416,46.007,40.179,46.007C329.537,154.1,345.907,132.195,345.907,105.108Zm-25.67,3.585c0,12.149-5.952,21.111-14.509,21.111-10.045,0-16.741-7.369-16.741-24.9C288.986,93.358,295.5,84,303.867,84,314.284,84,320.236,90.171,320.236,108.693Z" transform="translate(-2.573 29.565)" fill="url(#linear-gradient-3)"></path><text id="_-" data-name="-" transform="translate(-39 31)" fill="#9c1971" font-size="156" font-family="CoconNextArabic-Bold, CoconÆ Next Arabic" font-weight="700"><tspan x="-3.742" y="143">-</tspan></text></g><circle id="Ellipse_25" data-name="Ellipse 25" cx="10.5" cy="10.5" r="10.5" transform="translate(1695 693)" fill="url(#linear-gradient-4)"></circle></g></svg>
      </div>
      
      <div className='row'>
          <div className='w-60'>
              <div id="lottie" class=" m-auto web " ></div>
          </div>
          <div className='w-40 pb-5 mb-2'>
            <div class="sp-container">
              <div class="sp-content">
                <div class="sp-globe"></div>
                    <h2 class="frame-1">WE MAKE INNOVATIVE SERVICES</h2>
                    <h2 class="frame-2">WE MAKE CUSTOMER-ORIENTED APPS</h2>
                    <h2 class="frame-5">
                      <span>i-</span>
                      <span>web</span><br></br>
                      <span><div class="mt-5 pt-5 wrapper ">
                  <div class="link_wrapper">
                    <a href="#">GET IN TOUCH</a>
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                      </svg>
                    </div>
                  </div>
                </div></span>
                    </h2>
                    <h2 class="frame-3">WE MAKE SMOOTH E-COMMERCE</h2>
                    <h2 class="frame-4"> FULLY GUARANTEED SERVICES</h2>
                    
                </div>
              </div>
              <div class=" d-flex justify-content-center mt-5 ">
                
                </div>
              </div>
      </div>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
        <label for="menu-icon"></label>
          <nav class="nav"> 		
            <ul class="pt-5">
              <li><a href="#">What We Do</a></li>
              <li><a href="#">How We Do</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>


      <footer class=" text-center text-white w-100 ">
      

      <div class="text-center p-3" >
        © 2020 Copyright
      </div>
      </footer>



    
    </div>
  );
}

export default App;
