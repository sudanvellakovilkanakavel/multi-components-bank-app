var React = require('react');
var ReactRouter = require('react-router');



var Header = React.createClass({


  render: function () {

     return (

            
            <h2><font color="orange">CHOOSE YOUR LOAN WISELY </font></h2>
           <h4>An React  App For Calculating Your Monthly Loan Interest in Different Canadian Banks</h4>
           <br /> <br />

            )
                     }



ReactDOM.render(

<UserInformation />,
document.getElementById('app')


  );