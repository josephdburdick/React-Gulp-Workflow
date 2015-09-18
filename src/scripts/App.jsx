let App = {};
App.config = require('./config.jsx')();
App.libraries = {};
App.libraries.React = require('react');
App.libraries.$ = require('jquery');

App.helpers = {};
App.helpers.heightRatio = require('./helpers/heightRatio.jsx')(App);

App.components = {};
App.components.testModule = require('./components/test_module.jsx');
App.components.PrimaryNavigation = require('./components/PrimaryNavigation.jsx')(App);
App.components.Card = require('./components/Card.jsx')(App);
App.components.Footer = require('./components/Footer.jsx')(App);

App.views = {};
App.views.Home = require('./views/Home.jsx')(App);

/** Main **/
let React = App.libraries.React;
let $ = App.libraries.$;

let heightRatio = App.helpers.heightRatio;
let PrimaryNavigation = App.components.PrimaryNavigation;
let Footer = App.components.Footer;
let Home = App.views.Home;

let Body = React.createClass({
  render(){
    let route = window.location.hash ? window.location.hash : "/";

    return (
      <div>
        <PrimaryNavigation route={route} />
        <Home />
        <Footer />
      </div>
    );
  }
});




React.render(
  <Body />, document.querySelector('#yield')
);

$(document).on('ready', () => {
  heightRatio();
});
