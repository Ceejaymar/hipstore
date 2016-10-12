import React from 'react'
import {Link} from 'react-router'

var HomeBody = React.createClass({
  render(){
    return (
      <div className="content container-fluid">
        <div className="col-xs-5 text-center firstCont rounded">
          <h1 className="welcome">Welcome to hipstore</h1>
        </div>
        <div className="col-xs-3 secondCont rounded">
          <h1>Featured Item</h1>
        </div>
        <div className="col-xs-3 thirdCont rounded">
          <Link to="/category/other/Beard%20Grooming%20kit">
            <div className="newItems rounded">
              <h1>Newest Item</h1>
            </div>
          </Link>
          <div className="rounded callToAction">
            <p>Sign up. We'll send you some guac.</p>
            <Link to="/signup"><button type="button" className="btn btn-default btn">Join Now!</button></Link>
          </div>
        </div>
      </div>
    )
  }
})

export default HomeBody


      //       <div className="homeFlex">
      //   <div className="firstCont rounded">
      //     <h1 className="welcome">Welcome to hipstore</h1>
      //   </div>
      //   <div className="secondCont rounded">
      //     <h1>Featured Item</h1>
      //   </div>
      //   <div className="thirdCont rounded">
      //     <Link to="/category/other/Beard%20Grooming%20kit'">
      //       <div className="newItems rounded">
      //         <h1>Newest Item</h1>
      //       </div>
      //     </Link>
      //     <div className="rounded callToAction">
      //       <p>Sign up. We'll send you some guac.</p>
      //       <Link to="/signup"><button type="button" className="">Join Now!</button></Link>
      //     </div>
      //   </div>
      // </div>