import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Sticky} from 'react-sticky';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Nav = React.createClass({
  getInitialState(){
    return {
      itemName: ''
    }
  },
  handleChange(event){
    if(event.target.value.length === 0){
      this.props.closeModal();
    } else {
      this.props.openModal();
      this.setState({itemName: event.target.value})
      this.props.onChange(event.target.value)
      setTimeout(() =>{
        ReactDOM.findDOMNode(this.refs["searchInput"]).focus()
      },500)
    }

  },
  handleReset: function (event){
    if(event.key === "Backspace"){
      this.props.onReset()
    }
  },
  focusOnInput(){
    this.props.searchInputFunc()
    setTimeout(() =>{
      ReactDOM.findDOMNode(this.refs["searchInput"]).focus()
    },100)
  },
  render: function() {
    let links = Object.keys(this.props.data).map(function(category, i){
      return (

        <li key={i} className="link">
          <Link to={"/category/" + category}>{category.toLowerCase()}</Link>
        </li>
      )
    })
    return (
        <Sticky stickyClassName="customSticky"> 
          <nav className="navCont">
            <ul className="linkContainer">
              <Link to="/home/signup"><li className="link nameLink">{this.props.username}</li></Link>
              {links}
              <li className="link">
              <Link to="/checkout/cart"><button className="suitcase"><i className="fa fa-suitcase" aria-hidden="true"></i></button></Link>
              </li>
            </ul>
            <div className="searchBar">
              {
                this.props.searchInput ?
                  <ReactCSSTransitionGroup transitionName="search" transitionAppear={true} transitionAppearTimeout={500}
                    transitionEnter={false} transitionLeave={false}>
                    <input 
                      key="search"
                      type="text" 
                      className="searchInput"
                      ref="searchInput" 
                      placeholder="Search"
                      onChange={this.handleChange}
                      onKeyDown={this.handleReset} />
                  </ReactCSSTransitionGroup> :
                  <button className="searchButton" onClick={this.focusOnInput}>search <i className="fa fa-search" aria-hidden="true"></i></button>
              }
            </div>
          </nav>
        </Sticky>
    )
  }
})

export default Nav

