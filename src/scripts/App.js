
let
  App = {};
  App.config = require('./config.js');
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

App.components.MainContainer = require('./components/MainContainer.js');
App.views.Home = require('./views/Home.js');
App.views.About = require('./views/About.js');
App.views.Work = require('./views/Work.js');
App.views.NoMatch = require('./views/NoMatch.js');

let routes = (
  <Route path="/" component={App.components.MainContainer}>
    <DefaultRoute component={App.views.Home}/>
    <Route path="home" component={App.views.Home}/>
    <Route path="work" component={App.views.Work}/>
    <Route path="about" component={App.views.About}/>
    <Route path="*" component={App.views.NoMatch}/>
  </Route>
);

let createBrowserHistory = require('history/lib/createBrowserHistory');
let history = createBrowserHistory();
React.render(<Router history={history}>{routes}</Router>, document.querySelector('#yield'));

// Router.run(routes, Router.HashLocation, function (Handler) {
//   React.render(<Handler/>, document.querySelector('#yield'));
// });
