
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
let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Link = ReactRouter.Link;

// App.helpers.heightRatio = require('./helpers/heightRatio.jsx');

// App.components.PrimaryNavigation = require('./components/PrimaryNavigation.jsx');
App.components.Card = require('./components/Card.jsx');
// App.components.Footer = require('./components/Footer.jsx')(App);

App.views.Home = require('./views/Home.jsx')(App);
App.views.About = require('./views/About.jsx')(App);
App.views.Work = require('./views/Work.jsx');

/** Main **/


// let PrimaryNavigation = App.components.PrimaryNavigation(App);
// let Footer = App.components.Footer(App);
// let Home = App.views.Home(App);


let routes = (
  <Route path="/" handler={App.views.Home}>
    <Route path="work" handler={App.views.Work}/>
    <Route path="about" handler={App.views.Home}/>
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.querySelector('#yield'));
});

module.exports = App;
