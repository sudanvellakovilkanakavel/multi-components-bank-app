var React = require('react');
var ReactRouter = require('react-router');

var divStyle = {
  background: "#F5F5DC"
  
}; 

var Header = React.createClass({


  render: function () {

     return (
              <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center" style={divStyle} > 
            
            <h2><font color="orange">CHOOSE YOUR LOAN WISELY </font></h2>
           <h4>An React  App For Calculating Your Monthly Loan Interest in Different Canadian Banks</h4>
           <br /> <br />
           </div>

            )
                     }



ReactDOM.render(

<Header />,
document.getElementById('app')


  );