// import {config} from './config';

let App = {
  config: require('./config.jsx'),
  helpers: {},
  components: {},
  views: {}
};
let React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler;

App.components.MainContainer = require('./components/MainContainer.jsx');
App.views.Home = require('./views/Home.jsx');
App.views.About = require('./views/About.jsx');
App.views.Work = require('./views/Work.jsx');

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

// module.exports = App;
