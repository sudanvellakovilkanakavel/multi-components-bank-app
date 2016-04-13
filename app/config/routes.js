var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hasHistory;
var  Header = require ('../components/Header');
var  Home = require ('../components/Home');
var  Result = require ('../components/Result');
var  PromptContainer = require ('../containers/PromptContainer');


var routes = {

<Router history = {hashHistory}>


<IndexRoute component = {Home}  />




</Route>
</Router>


};


module.exports = routes;