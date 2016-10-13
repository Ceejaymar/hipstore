import React from 'react'
import {Link} from 'react-router'
import {Sticky} from 'react-sticky';
import TopNavBack from './topNavBack';

const TopNav = React.createClass({
  render(){
    console.log(this.props.homepage)
    var titleBox = this.props.homepage ? <TopNavBack/> : null
    return (
      <div className={"topNav " + (this.props.homepage ? "homeTitle" : null)}>
        {titleBox}
        <Sticky className="stickyLogo" stickyStyle={{width: "15vw", marginTop: "0px", paddingTop: '1%', paddingLeft: '2%'}}
        style={{marginTop: "0px"}} topOffset={600}>
            <Link to="/">
              <div className="mainLogoSticky">
                <img className=""src={require("../../images/hipstore.png")} />
              </div>
            </Link>
        </Sticky>
      </div>
    )
  }
})

export default TopNav
