
let App = {
  config: require('./config.jsx')(),
  libraries: {
    $: require('jquery'),
    React: require('react')
  },
  Router: require('react-router'),
  helpers: {},
  components: {},
  views: {}
};
let React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    MainContainer = require('./components/MainContainer.jsx');

App.views.Home = require('./views/Home.jsx');
App.views.About = require('./views/About.jsx');
App.views.Work = require('./views/Work.jsx');

/** Main **/


// let PrimaryNavigation = App.components.PrimaryNavigation(App);
// let Footer = App.components.Footer(App);
// let Home = App.views.Home(App);


let routes = (
  <Route path="/" handler={MainContainer}>
    <Route name="home" handler={App.views.Home}/>
    <Route name="work" handler={App.views.Work}/>
    <Route name="about" handler={App.views.About}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.querySelector('#yield'));
});

module.exports = App;
