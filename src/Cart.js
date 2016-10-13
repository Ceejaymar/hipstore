import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Cart =React.createClass({
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName="search"
               transitionAppear={true} transitionAppearTimeout={5000}
               transitionEnter={false} transitionLeave={false}>
          
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
})

export default Cart