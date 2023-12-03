import { useState } from 'react'
import wegood4u from '../src/assets/img/wegood4u.png'
import thaigood4u from '../src/assets/img/ThaiGood4U_Logo.png'
import msiagood4u from '../src/assets/img/MsiaGood4u_Logo.png'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './App.css'

function App() {
  return (
  <main>
    <section>
      <div>
        <a href="https://thaigood4u.com" target="_blank">
          <img src={thaigood4u} className="logo thaigood4u" alt="Thaigood4u logo" />
        </a>
      </div>
      <div className='left-arrow'>
        <ArrowCircleUpIcon/>
      </div>
      <div>
        <a href="https://wegood4u.com">
          <img src={wegood4u} className="main-logo" alt="WeGood4u Logo" />
        </a>
      </div>
      <div className='right-arrow'><ArrowCircleUpIcon/></div>
      <div>
        <a href="https://msiagood4u.com">
          <img src={msiagood4u} className="logo msiagood4u" alt="MsiaGood4u Logo" />
        </a>
      </div>
    </section>
  
    <p className="read-the-docs">
      Click on the Logos to learn more
    </p>
  </main>
)}

export default App
