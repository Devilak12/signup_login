import React from 'react'

class signup extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  signupSubmit(e){};
  render(){
    return(
      <div className='box'>
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="first name"></input>   
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="last name"></input>   
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.signupSubmit.bind(this)}>Sign Up</button> 
        </form>
        </div>
    );
  }
}
export default signup