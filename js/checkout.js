var React = require('react')
var createReactClass = require('create-react-class');

var App = require('./index.js')
var Basket = require('./basket')
var Display = require('./display')


import{Router,Route,browserHistory} from 'react-router'


var Checkout = createReactClass({

    render:function(){
        console.log(data)
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
            <div>
            </div>
            </div>
        )
    }
})
module.exports = Checkout