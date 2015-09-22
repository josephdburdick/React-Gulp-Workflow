
let
  App = {};
  App.config = require('./config');
  App.helpers = {};
  App.components = {};
  App.views = {};

let
  React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  Link = Router.Link,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;

App.components.MainContainer = require('./components/MainContainer');
App.views.Home = require('./views/Home');
App.views.About = require('./views/About');
App.views.Work = require('./views/Work');

let routes = (
  <Route path="/" handler={App.components.MainContainer}>
    <Route name="home" handler={App.views.Home}/>
    <Route name="work" handler={App.views.Work}/>
    <Route name="about" handler={App.views.About}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.querySelector('#yield'));
});
