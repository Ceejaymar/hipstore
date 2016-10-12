import React from 'react';
import {Link} from 'react-router'

const Signup = React.createClass({
  getInitialState(){
    return{name: '', email: "", password: ""}
  },
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  },
  signup(){
    this.props.signup(this.state.name)
  },
  render(){
    var that = this;
    let types = ["name", "email", "password"]
    let inputs = types.map(function(type, i){
      let isPassword = (type === "password") ? "password" : "text"
      return (
        <div className="inputField" key={i}>
          <input onChange={that.handleChange} name={type} type={isPassword} placeholder={type}/>
        </div>
      )
    })
    console.log(this.props.route.name)
    return (
      <div className="sign">
        <div className="signupImage">
          <p>life is a journey. enjoy the ride</p>
        </div>
        <section className="signup">
          <h1>Sign Up</h1>
          {inputs}
          <div className="signupButtons">
            <button onClick={this.signup} className="signupButton1 btn btn-default"type="submit">Where's the Guac</button>
            <Link to="/"><button className="signupButton2 btn btn-default" type="submit">We Cool Folks Already!</button></Link>
          </div>
        </section>
      </div>
    )
  }
});

export default Signup;