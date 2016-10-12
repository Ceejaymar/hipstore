import React from 'react';
import {Link} from 'react-router';


const CategoryDisplay = React.createClass({
  render: function(){
    var category = this.props.category === undefined ? "tech" : this.props.category
    return (
      <article className={"categoryProduct ." + this.props.flex}>
        <Link to={"/category/" + category + "/" + this.props.itemName}><img alt={this.props.itemName} className="modalImage" src={this.props.src} /></Link>
      </article>
    )
  }
})


export default CategoryDisplay;