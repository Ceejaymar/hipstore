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
      },100)
    }

  },
  handleReset: function (event){
    if(event.key === "Backspace"){
      this.props.onReset()
    }
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
      <header style={{"zIndex": 10000, position: "fixed"}}>
          <div className="navFlag">
          <section className="navCont">
            <ul className="linkContainer">
              <Link to="/signup"><li className="link nameLink">{this.props.username}</li></Link>
              {links}
              <li className="link">
              <button className="suitcase" onClick={this.props.openModal}><i className="fa fa-suitcase" aria-hidden="true"></i></button>
              </li>
            </ul>
            <ReactCSSTransitionGroup transitionName="searchGrow">
            <div className="searchBar">
              <input 
                key="search"
                type="text" 
                className="searchInput"
                ref="searchInput" 
                placeholder="Search"
                onChange={this.handleChange}
                onKeyDown={this.handleReset} />
            </div>
            </ReactCSSTransitionGroup>
          </section>
          <article className="hipstoreFlag">
            <div className="flag"><img src="http://st.depositphotos.com/1280399/2546/i/950/depositphotos_25461693-Dirty-white-leather-texture.jpg" /></div>
            <Link to="/">
              <div className="mainLogoSticky"></div>
            </Link>
          </article>
          </div>
  
      </header>
    )
  }
})

export default Nav

        //<Sticky stickyStyle={{"zIndex": 10000}}>      </Sticky>
                //<div className="topNav"><img src="https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/12/127/127605/front-page-f.jpg?1402612630"/></div>
