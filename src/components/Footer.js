import React from 'react'

var Footer = React.createClass({
  render: function(){
    return (
      <div className="margin">
        <hr />
        <div className="container-fluid text-muted">
          <div className="aboutHS col-xs-7">
            <h1 className="">About HipStore</h1>
            <p>Hip Store totally brings hip apparel and accessories from Brooklyn to San Francisco.</p>
          </div>
          <div className="signUp col-xs-3 ">
            <h3 className="">Want to stay up to date?</h3>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Sign up</button>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <ul className="navbar-nav col-xs-4 bottomNav">
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Account</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Our team</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Jobs</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Contact Us</a></li>
          </ul>
          <div className="col-xs-4 text-center">
            <a className="presented" href="http://www.c4q.nyc/" target="_blank">Sponsored by C4Q</a>
          </div>
          <div className="col-xs-1 pull-right">
          <small>HipStore &copy; 2016 </small>
          </div>
        </div>
        
      </div>
    )
  }
})

export default Footer