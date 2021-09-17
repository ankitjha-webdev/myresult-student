import React from 'react'
import './css/app.css';

function App(){
    return(
        <>
        
    {/* Background circle Start */}
    <div class="bg-circles">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
    </div>
    {/* Background circle end  
    Overlay Start */}
    <div class="overlay"></div>
 
    {/*contact Section Start  */}
      <section class="contact-section sec-padding" id="contact">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h2>My Result  </h2>
            </div>
          </div>
          <div class="row">
          
          <div class="form">
            <h3>Search Result!</h3>
            <form action=""> 
            <div class="row" id="form">
                <div class="input-group">
                    <input
                      type="number"
                      name="name"
                      placeholder="Reg. No"
                      class="input-control"
                      required
                    />
                  </div>
                  <div class="input-group">
                   <div class="row">
                    <label for="year" class="label">Select Your Year : </label>
                    <select id="result" name="result">
                        <option value="volvo">Select</option>
                        <option value="volvo">1st</option>
                        <option value="saab">2nd</option>
                        <option value="fiat">3rd</option>
                        <option value="audi">4th</option>
                      </select>
                      </div>
                   </div>
                   <button type="submit" class="btn">Get Result!</button>
                  
            </div>
            
              </form>
          
          </div>
          <div class="rs">
            <h3>Recent Result! </h3>
            
          </div> 
          </div>
          
          </div>
      </section>
        </>
    )
}
export default App