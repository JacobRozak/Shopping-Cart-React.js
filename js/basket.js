import ReactDOM from 'react-dom';

var React = require('react');

var createReactClass = require('create-react-class');

import{Router,Route,browserHistory} from 'react-router'


var Basket = createReactClass({
render : function(){
//console.log(this.props.cost)
return (
  <div>
	<h1 className="basket">Basket:</h1>
	<ul>
   {
	  this.props.cart.map(element =>{
		return <li className="right">
		        <div className="cart-item">
				   <img className="cartImg" src={element.image}/>
				   
				     <p className="cartName">{element.name}</p>
					 <p className="cartName"><img id="coin" src={'./coins.png'}/>{element.price} Gill</p>
					
		           <img src='./bin.png' onClick={this.delete} id={element.id} className="cartBin"></img>
		        </div>
				
		  </li>
	  })
	}
	{
	this.props.cart.length > 0?
	<div>
	<p className="cost">Total:</p>
	<p id="cartCost">{this.props.cost} Gill</p>
	</div>
	:<p className="noItems">No items</p>
	}
	</ul>
	<a href="/checkout"><button className="btn btn-primary" id="cartButton">Continue</button></a>
  </div>
)
},
delete: function(e){
e.preventDefault()
console.log(e.target.id)
this.props.removeItem(e.target.id)

}
})

module.exports = Basket
