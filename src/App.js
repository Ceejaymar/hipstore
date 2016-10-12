import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { StickyContainer} from 'react-sticky';

//css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './category.css';
import './signup.css';
import './product.css';

//components 
import Nav from './components/Nav'
import Footer from './components/Footer'
import FoundError from './FoundError'
import HomePage from './HomePage'
import CategoryPage from './CategoryPage'
import ProductPage from './ProductPage'
import Signup from './Signup'
import data from './data'
import ModalElement from './components/homepage/modal'

var App = React.createClass({

  getInitialState(){
    return {
      data: data, 
      listOfItems: '', 
      filteredList: '',
      filteredData: null, 
      modalIsOpen: false, 
      closeModal: this.closeModal, 
      scrollRight: this.scrollRight, 
      scrollLeft: this.scrollLeft,
      signup: this.signup, 
      bottomFeatureI: 0,
      cart: [], 
      isCart: false,
      username: "signup", 
      addToCart: this.addToCart,
    }
  },

  componentDidMount(){

    //create a list of all data items
    var listOfItems = []
    Object.keys(data).map(function(category){
      return data[category].map(function(item){
          listOfItems.push(item)
      })
    })

    this.setState({listOfItems: listOfItems, filteredList: listOfItems})
  },
  openModal(event) {

    //check to see if the function call is from the search bar or cart click
    let isCart = event !== undefined ? true : false
    this.setState({modalIsOpen: true, isCart: isCart});
  },
  closeModal() {
    this.setState({modalIsOpen: false, isCart: false});
    document.querySelector('.searchInput').value = ""

  },
  scrollRight(){
    let startIndex = this.state.bottomFeatureI === this.state.data.tech.length-4 ? 0 : this.state.bottomFeatureI + 1
      this.setState({bottomFeatureI: startIndex})
  },
  scrollLeft(){
    let startIndex = this.state.bottomFeatureI === 0 ? this.state.data.tech.length-4 : this.state.bottomFeatureI - 1
      this.setState({bottomFeatureI: startIndex})
  },

  handleItemSearch(item){

    var searchItemsObjs = this.state.filteredList.filter(function(filteredListItem){
      if(filteredListItem.name.toLowerCase().indexOf(item) !== -1){
        return filteredListItem
      }
    })

    this.setState({filteredList: searchItemsObjs})
  },
  handleSearchReset() {
    this.setState({filteredList: this.state.listOfItems})
  },
  addToCart(item){
    this.setState({cart: this.state.cart.concat(item)})
  },
  signup(name){
    this.setState({username: name})
  },
  render() {
    //loop over all the children routes and pass them propTypes
    let that = this
    var children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, Object.assign({}, that.state));
    });
    console.log(this.state.isCart)
    return (
      <div>
        <StickyContainer>
        <Nav data={this.state.data} onChange={this.handleItemSearch} onReset={this.handleSearchReset} openModal={this.openModal} closeModal={this.closeModal} cart={this.state.cart} username={this.state.username} cartLookUp={this.cartLookUp}/>
        {children}
        <ModalElement 
          data={this.state.data} 
          filteredList={this.state.filteredList}
          modalState={this.state.modalIsOpen}
          closeModal={this.closeModal}
          isCart={this.state.isCart}
          cart={this.state.cart}/>
        </StickyContainer>
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/category/:category" component={CategoryPage} />
      <Route path="/category/:category/:product" component={ProductPage} />
      <Route path="/signup" component={Signup} />
    </Route> 
    <Route path="*" component={FoundError} />
  </Router>,
  document.getElementById('root')
);
