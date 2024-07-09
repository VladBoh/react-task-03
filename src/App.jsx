import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
    <header className='bg-[#111E4C]'>
    <div className='flex justify-center items-center gap-[755px] p-[20px] mx-[120px]'>
        <div className='text-[#A7B7E7] w-24 flex items-center gap-[11px]'>
          <img src="src/assets/icon/Logo.svg" alt="" />
          <p>WebDev</p>
        </div>
          <div className='flex gap-14 text-[#A8B7E7]'>
            <p>about me</p>
            <p>services</p>
            <p>portfolio</p>
            <p>contact</p>
          </div>
     </div>
     <section>
      <div className='flex flex-col justify-center items-center text-center gap-[40px] py-[200px] text-[#A8B7E7]'>
          <h1 className='font-bold text-[90px] w-[1300px]'><span className='text-[#009DFF]'>Professional</span> development
          of websites</h1>
          <div className='flex flex-col items-center gap-y-[40px]'>
            <p className='text-[24px] w-[818px]'>leading digital developer with solid design and development expertise. We build readymade websites  mobile AND applications</p>
            <button className='w-[240px] h-[60px] bg-[#009DFF26] rounded-[15px] hover:bg-[#ffffff]'>services</button>
          </div>
      </div>
     </section>
    </header>
    <main>
    <div className='flex flex-col items-center'>
      <div className='flex gap-[104px] py-[120px]'>
        <p className='font-bold text-[48px]'>Why do people choose me?</p>
      <div className='flex flex-col justify-center gap-[10px] text-[24px]'>
        <p className='text-[#A7B7E7]'>Hi. My name is <span className='text-black'>Mark</span>.</p>
        <p className='text-[#A7B7E7]'>  I am a <span className='text-black'>web developer</span> with 7 years of experience</p>
      </div>
      </div>
        <div className='bg-[#ffffff] flex items-center gap-x-[104px]'>
         <div className='grid grid-cols-2 w-[550px] gap-[74px]'>
          <div>
            <img src="src/assets/icon/icon.png" alt="" />
            <h3 className='font-bold text-[24px] mt-[22px]'>Attention to detail</h3>
            <p className='text-[#A7B7E7]  mt-[10px]'>Thorough study of layouts and specifics of display on 
            various devices</p>
          </div>
          <div>
            <img src="src/assets/icon/net.png" alt="" />
            <h3 className='font-bold text-[24px] mt-[22px]'>Modern tools</h3>
            <p className='text-[#A7B7E7] mt-[10px]'>Tracking and applying modern technologies and web design trends</p>
          </div>
          <div>
            <img src="src/assets/icon/num.png" alt="" />
            <h3 className='font-bold text-[24px] mt-[22px]'>100% reputation</h3>
            <p className='text-[#A7B7E7] mt-[10px]'>It is important for me not only to hand over the project, but to make it high quality</p>
          </div>
          <div>
            <img src="src/assets/icon/like.png" alt="" />
            <h3 className='font-bold text-[24px] mt-[22px]'>No failures</h3>
            <p className='text-[#A7B7E7] mt-[10px'>I do not miss deadlines and often close projects ahead 
            of schedule</p>
           </div>
          </div>
          <img className='w-[686px] h-[626px]' src="src/assets/icon/person.jpg" alt="" />
        </div>
      </div>
    </main>
    <footer>
      <div className='bg-[#111E4C] flex items-center justify-center gap-[600px] h-[201px] mt-[121px]'>
        <div className='flex gap-[60px] text-[#A8B7E7]'>
          <p>Privacy Policy</p>
          <p>Personal data processing policy</p>
          <p>Public offer</p>
        </div>
         <div className='flex gap-[22px]'>
          <img src="src/assets/icon/inst.svg" alt="" />
          <img src="src/assets/icon/behance.svg" alt="" />
          <img src="src/assets/icon/dribble.svg" alt="" />
         </div>
      </div>
    </footer>
    </div>
  )
}

export default App
