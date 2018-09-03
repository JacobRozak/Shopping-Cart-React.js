import ReactDOM from 'react-dom';

var React = require('react');

var createReactClass = require('create-react-class');

import{Router,Route,browserHistory} from 'react-router'

var Checkout = require('./checkout')

var Basket = require('./basket')
var Display = require('./display')


var Main = createReactClass ({
   render : function(){
	   return (
		   <Router history={browserHistory}>
			   <Route path={'/'} component={App}></Route>
			   <Route path={'/checkout'} component={Checkout}></Route>
		   </Router>
		   )   
   }
})
var App = createReactClass ({
	getInitialState : function(){
	  return {
	  total : 0,
	  cart :[],
	  stock:[
{
	id:0,
	name:'Star Wars: Battlefront',
	description: 'Immerse Yourself in the Ultimate Star Wars Experience',
price: 300,
image: './game1.jpg',
avaliable: true
},{
	id:1,
	name:'Dying Light',
	description: 'Dying Light is an open world first person survival horror-adventure video game developed by Techland',
price: 500,
image: './game2.jpg',
avaliable: true
},{
	id:2,
	name:'Bloodborne',
	description: 'Bloodborne is an action role-playing video game developed by FromSoftware',
price: 9999,
image: './game3.jpg',
avaliable: true
	},{
id:3,
name:'Evolve',
description: 'Evolve is a first-person shooter video game developed by Turtle Rock Studios' ,
price: 150,
image: './game4.jpg',
avaliable: true
}
]}
},
render : function(){

return(
<div>
<footer>
<div className="footer">
	<div className="footer">
		<img src={'./telephone.png'}/>
		  <p className="info">1337 1337 1337</p>
	</div>
	<div className="footer">
		<img src={'./flag.png'}/>
		<p className="info">Try another Castle</p>
    </div>
</div>	
</footer>

<div className="header">
   <img id="logo" src={'./logo.png'}/>
</div>
<div className="row">
<div className="col-md-10">
</div>
</div>
<div className="cart">
<div className="row">
<div className="col-md-10">
 <Basket cart={this.state.cart} cost={this.state.total} stock={this.state.stock} removeItem={this.removeItem} />
 </div>
 </div>
 </div>
<div className="row">
<div className="col-md-4">
<div className="wrapper">
 <Display stock={this.state.stock} onAdd ={this.onAdd}/>
 </div>
</div>
</div>

</div>

)
},
onAdd :function(item){

var picket = item


if(item){
this.state.stock[item].avaliable = false;
}


var ready = {}
ready.name = this.state.stock[picket].name
ready.price = this.state.stock[picket].price
ready.id = this.state.stock[picket].id
ready.image = this.state.stock[picket].image


this.state.cart.push(ready)

this.calculateTotal()
},
removeItem: function(itemId){

this.state.stock[itemId].avaliable = true;

var cart = this.state.cart;

for(var i =0;i<cart.length;i++){
if(cart[i].id == itemId){
cart.splice(i, 1)
}
}
this.setState({cart: cart})
this.calculateTotal()
},

calculateTotal:function(){

var total = 0;

this.state.cart.forEach(function(item, index) {
total += item.price

})

this.setState({
total: total
})
}
})

module.exports = App


ReactDOM.render(
<Main />,
document.getElementById('app')
)