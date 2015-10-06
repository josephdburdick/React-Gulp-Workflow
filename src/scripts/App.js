
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
App.views.Services = require('./views/Services.js');
App.views.Thoughts = require('./views/Thoughts.js');

let routes = (
  <Route path="/" handler={App.components.MainContainer}>
    <Route name="home" handler={App.views.Home} />
    <Route name="work" handler={App.views.Work} />
    <Route name="services" handler={App.views.Services} />
    <Route name="about" handler={App.views.About} />
    <Route name="thoughts" handler={App.views.Thoughts} />
    <DefaultRoute name="not-found" handler={App.views.Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.querySelector('#app'));
});
