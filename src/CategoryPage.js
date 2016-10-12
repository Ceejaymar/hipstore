import React from 'react'
import CategoryDisplay from './components/category/categoryProductDisplay';

const CategoryPage = React.createClass({

  render() {
    var products = this.props.data[this.props.params.category].map(function (item, i){
      return (
        <CategoryDisplay flex={"flex"+i} category={item.category} src={item.image[0]} itemName={item.name} key={item + i}/>
      )
    })

    return (
      <div className={"categoryPage " + this.props.params.category}>
        <h3>{this.props.params.category.toUpperCase()}</h3>

        <div className="greenDash">

        <section className="productDisplay">
           {products}
        </section>
        </div>

        <div className="browndash">
        </div>
      </div>
      )
  }
  })
export default CategoryPage