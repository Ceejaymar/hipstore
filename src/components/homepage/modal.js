import React from 'react'
import Modal from 'react-modal';
import DisplayProduct from './displayProduct';

const customStyles = {
  content : {
    top: '10%',
    left: '5%',
    width: '90%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    background: 'rgba(240,216,168,.3)'
  }
};

var ModalElement = React.createClass({


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  findCategory(filteredItem){

    for(let i = 0; i < this.props.filteredList.length; i++){
    
        var item = this.props.filteredList[i]
        if(item.name === filteredItem){
          return item;
        }
      
    }
  },

  render() {
    let itemDisplay = []
    let cartDisplay = null


    if(this.props.modalState && !this.props.isCart){  
      for (let i = 0; i < 6; i++){
        let item = this.props.filteredList[i]
        if(item === undefined){
          continue;
        }
        itemDisplay.push(<DisplayProduct category={item.category} src={item.image[0]} itemName={item.name} key={i} closeModal={this.props.closeModal}/>)
      }
    } else if(this.props.modalState && this.props.isCart){
      let that = this;
      cartDisplay = this.props.cart.map(function(item,i){
        return <DisplayProduct category={item.category} src={item.image[0]} itemName={item.name} price={item.price}key={i} closeModal={that.props.closeModal}/>
      })
    console.log(cartDisplay)
    }
    return (
      <div className="content">
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          className={this.props.isCart ? "cart" : "content"}
          >

          <button className="fa fa-times pull-right" onClick={this.props.closeModal}></button>
          <h2 ref="subtitle">{this.props.isCart ? "Items In Cart:" : "Search Results:"}</h2>
          <div className="modalDirection">

          {cartDisplay ? cartDisplay : itemDisplay}
          </div>

          <div>
          </div>
        </Modal>
      </div>
    );
  }
});

export default ModalElement