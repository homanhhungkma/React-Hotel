import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }
  }
  isChange = (event)=>{
    const Name = event.target.name
    const value = event.target.value
    this.setState({
      [Name]:value
    })
  }
  submitFormRegister = (event)=>{
    event.preventDefault()
    const Name = event.target.name
    const value = event.target.value
    this.setState({
      isRedirect:true,
      [Name]:value
    })
  }
    render() {
      if(this.state.isRedirect === true)
      {
        console.log(this.state);
      }
        return (
            <div>
                <div>
  <div className="banner-our-room">
    <span>REGISTERE</span>
  </div>
  <div className="form-accout">
    <div className="container" style={{marginBottom: '20px'}}>
      <div className="row">
        <div className="col-md-6 form-login">
          <h3>
            BECOME A MEMBER !
          </h3>
          <h4>Registere</h4>
          <form id="form-register">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input name="rEmail" onChange={(event)=>this.isChange(event)} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input name="rPassWord" onChange={(event)=>this.isChange(event)} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input name="rAddress" onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Phone Number</label>
              <input name="rPhoneNumber" onChange={(event)=>this.isChange(event)} type="number" className="form-control" id="inputAddress2" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input name="rCity" onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select name="fState" onChange={(event)=>this.isChange(event)} id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option value="Campuchia">Campuchia</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="VienNam">VienNam</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input name="rCheck" className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button onClick={(event)=>this.submitFormRegister(event)} type="submit" className="btn btn-primary sendnow">Registere</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 content-regis">
              <h5>Are You a member?</h5>
              <NavLink to="/login"> 
              <div className="Registere">Login Now</div>
              </NavLink>
            </div>
            {/* <div class="col-md-12 content-regis">
							<div class="cta">Quick registration with</div>
						</div> */}
            <div className="col-md-12 content-regis">
              <div className="login-face"><i className="fab fa-facebook-square" aria-hidden="true" /> Facebook</div>
            </div>
            <div className="col-md-12 content-regis">
              <div className="login-gmail"><i className="fab fa-google" /> Gmail</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Register;
