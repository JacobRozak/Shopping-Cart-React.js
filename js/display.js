import ReactDOM from 'react-dom';

var React = require('react');

var createReactClass = require('create-react-class');

import{Router,Route,browserHistory} from 'react-router'

var Display = createReactClass({
    
    render : function(){
    return(
      
        <ul className="grid">
          {
            this.props.stock.map(element =>{
              return <div className={element.avaliable?"cards":"disabledCards"}>
                     <img src={element.image} className="fixwidth listImage" />
                     <div class="clearfix">
                     <li>
                       <p className="name">{element.name}</p>
                       <p className="description">{element.description}</p>
                       <p className="priceDisplay"><img id="coin" src={'./coins.png'}/>{element.price} Gill</p>
                       <div className="product__button-wrap">
                      <button className="btn btn-primary" id={element.id} onClick={element.avaliable?this.onSubmit:''} ref="newItem">Add to Basket</button>
                      </div>
                     </li>
                     </div>
                     </div>
                     
                     
            })
          }
        </ul>
      
    )
    },
    onSubmit: function(e){
    e.preventDefault()
    this.props.onAdd(e.target.id)
    
    }
    })

    module.exports = Display;