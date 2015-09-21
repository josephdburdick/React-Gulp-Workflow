
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

App.helpers.heightRatio = require('./helpers/heightRatio.jsx');

App.components.PrimaryNavigation = require('./components/PrimaryNavigation.jsx');
App.components.Card = require('./components/Card.jsx');
// App.components.Footer = require('./components/Footer.jsx')(App);

App.views.Home = require('./views/Home.jsx')(App);

/** Main **/


// let PrimaryNavigation = App.components.PrimaryNavigation(App);
// let Footer = App.components.Footer(App);
// let Home = App.views.Home(App);

let React = App.libraries.React;

console.log(App);
let Yield = React.createClass({
  render(){
    let route = window.location.hash ? window.location.hash : "/";
    return (
      <div>
        <App.views.Home />
      </div>
    );
  }
});

React.render(<Yield />, document.querySelector('#yield'));
