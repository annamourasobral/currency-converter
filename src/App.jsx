import React from 'react';
import './exchange.png';
import './App.css';




function App() {

    return ( 
       <div className='app-wrapper'>
           <div className='blue-bg'></div>
           <div className='white-bg'></div>

           <div className='converter-wrapper'>
               <h2>Currency converter</h2>
               <div className='converter-inputs'>
                <div className='from-amount'>
                    <label for = ''>Amount</label>
                    <input type='number' className='form-control' placeholder='value' min={0} value='1'></input>
                </div>
                <div className='from-currency'>
                    <label for=''>From</label>
                    <select></select>
                </div>
                <div className='icon'>
                    <button type='button' id='swap-btn'>
                        <img src='exchange.png' alt=''></img>
                    </button>
                </div>
                <div className='to-currency'>
                    <label for=''>To</label>
                    <select></select>
                </div>
               </div>
           </div>
           <div className='result-wrapper'>
               <p>
                   <span id='from-result'></span>
                   =
                   <span id='to-result'></span>
               </p>
           </div>
           <button type='button' id='convert-btn'>Convert</button>
       </div>

    );
}

export default App;