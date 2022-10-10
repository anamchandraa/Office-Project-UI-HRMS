import axios from "axios";
import React,{useeffect} from "react";



const AddEmployee = () =>{


    return(
        <main id="main" classNameName="main">
        <section class="section">
        <div class="row">
          <div class="col-lg-12">
  
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Add Employee</h5>
  

                
                  {/* <div class="row mb-3">
                    <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputNumber" class="col-sm-2 col-form-label">Number</label>
                    <div class="col-sm-10">
                      <input type="number" class="form-control"/>
                    </div>
                  </div> */}

             <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputName5" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="inputName5"/>
                </div>
                <div class="col-md-6">
                  <label for="inputName5" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="inputName5"/>
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">designation</label>
                  <input type="email" class="form-control" id="inputEmail5"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Number of week off days</label>
                  <input type="password" class="form-control" id="inputPassword5"/>
                </div>
                <div class="col-6">
                  <label for="inputAddress5" class="form-label">D
                  epartment id</label>
                  <input type="text" class="form-control" id="inputAddres5s" placeholder="text"/>
                </div>
                <div class="col-6">
                  <label for="inputAddress2" class="form-label">manager id</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="text"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">working days</label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">employee type</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                
                <div class="col-md-6">
                  <label for="inputState" class="form-label">employee type</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Half Time...</option>
                    <option>Full Time...</option>
                  </select>
                </div>
                <br/>
                
                
                  {/* <label for="inputZip" class="form-label"></label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div> */}
                {/* <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div> */}
                {/* <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div> */}
              
                  {/* <div class="row mb-3">
                    <label for="inputNumber" class="col-sm-2 col-form-label">File Upload</label>
                    <div class="col-sm-10">
                      <input class="form-control" type="file" id="formFile"/>
                    </div>
                  </div> */}
                  <div class="row mb-3">
                    <label for="inputDate" class="col-sm-2 col-form-label">Date of Joining</label>
                    <div class="col-sm-10">
                      <input type="date" class="form-control"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputTime" class="col-sm-2 col-form-label">Time</label>
                    <div class="col-sm-10">
                      <input type="time" class="form-control"/>
                    </div>
                  </div>
  
                  {/* <div class="row mb-3">
                    <label for="inputColor" class="col-sm-2 col-form-label">Color Picker</label>
                    <div class="col-sm-10">
                      <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color"/>
                    </div>
                  </div> */}
                  <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Textarea</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" style={{height:'100px'}}></textarea>
                    </div>
                  </div>
                  <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked=""/>
                        <label class="form-check-label" for="gridRadios1">
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                        <label class="form-check-label" for="gridRadios2">
                          Female
                        </label>
                      </div>
                      <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled=""/>
                        <label class="form-check-label" for="gridRadios3">
                          Other
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                    <div class="col-sm-10">
  
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label class="form-check-label" for="gridCheck1">
                          Example checkbox
                        </label>
                      </div>
  
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2" checked=""/>
                        <label class="form-check-label" for="gridCheck2">
                          Example checkbox 2
                        </label>
                      </div>
  
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Disabled</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" value="Read only / Disabled" disabled=""/>
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Shift</label>
                    <div class="col-sm-10">
                      <select class="form-select" aria-label="Default select example">
                        <option selected="">Choose</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Multi Select</label>
                    <div class="col-sm-10">
                      <select class="form-select" multiple="" aria-label="multiple select example">
                        <option selected="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>

  
                  <div class="row mb-3">
                    {/* <label class="col-sm-2 col-form-label">Submit Button</label> */}
                    <div class="col-sm-2">
                      <button type="submit" class="btn btn-primary">Submit Form</button>
                    </div>
                  </div>
                  




  
                </form>
  
              </div>
            </div>
  
          </div>
  
          {/* <div class="col-lg-6">
  
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Advanced Form Elements</h5>
  
            
                <form>
                  <div class="row mb-5">
                    <label class="col-sm-2 col-form-label">Switches</label>
                    <div class="col-sm-10">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked=""/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled=""/>
                        <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled=""/>
                        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                      </div>
                    </div>
                  </div>
  
                  <div class="row mb-5">
                    <label class="col-sm-2 col-form-label">Ranges</label>
                    <div class="col-sm-10">
                      <div>
                        <label for="customRange1" class="form-label">Example range</label>
                        <input type="range" class="form-range" id="customRange1"/>
                      </div>
                      <div>
                        <label for="disabledRange" class="form-label">Disabled range</label>
                        <input type="range" class="form-range" id="disabledRange" disabled=""/>
                      </div>
                      <div>
                        <label for="customRange2" class="form-label">Min and max with steps</label>
                        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange2"/>
                      </div>
                    </div>
                  </div>
  
                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Floating labels</label>
                    <div class="col-sm-10">
                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                      </div>
                      <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px;"></textarea>
                        <label for="floatingTextarea">Comments</label>
                      </div>
                      <div class="form-floating mb-3">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <label for="floatingSelect">Works with selects</label>
                      </div>
                    </div>
                  </div>
  
                  <div class="row mb-5">
                    <label class="col-sm-2 col-form-label">Input groups</label>
                    <div class="col-sm-10">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
  
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                      </div>
  
                      <label for="basic-url" class="form-label">Your vanity URL</label>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                      </div>
  
                      <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span class="input-group-text">.00</span>
                      </div>
  
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
                      </div>
  
                      <div class="input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>
                    </div>
                  </div>
  
                </form>
  
              </div>
            </div>
  
          </div> */}

          <div class="card">
              <div class="card-body">
              <h5 class="card-title">Employee Info</h5>
            
        <form class="row g-3">
                <div class="col-md-12">
                  {/* <label for="inputName5" class="form-label">Your Name</label>
                  <input type="text" class="form-control" id="inputName5"/> */}


                    <label for="inputDate" class="col-sm-2 col-form-label">Date of </label>
                    <div class="col-sm-10">
                      <input type="date" class="form-control"/>
                    
                  </div>
   
                </div>
                <div class="col-md-6">
                  <label for="inputEmail5" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail5"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword5" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword5"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddres5s" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <br/>
                  {/* <button type="reset" class="btn btn-secondary">Reset</button> */}
                </div>
              </form>
        
        </div>
        </div>
        </div>

      </section>
      </main>





    )
}

export default AddEmployee;