'use strict';

var App = {};
App.config = require('./config.jsx')();
App.libraries = {};
App.libraries.React = require('react');
App.libraries.$ = require('jquery');

App.helpers = {};
App.helpers.heightRatio = require('./helpers/heightRatio.jsx')(App);

App.components = {};
App.components.testModule = require('./components/test_module.jsx');
App.components.PrimaryNavigation = require('./components/PrimaryNavigation.jsx')(App);
App.components.Footer = require('./components/Footer.jsx')(App);

App.views = {};
App.views.Home = require('./views/Home.jsx')(App);

/** Main **/
var React = App.libraries.React;
var $ = App.libraries.$;

var heightRatio = App.helpers.heightRatio;
//let testModule = App.components.testModule;
var PrimaryNavigation = App.components.PrimaryNavigation;
var Footer = App.components.Footer;
var Home = App.views.Home;

var Body = React.createClass({ displayName: "Body",
  render: function render() {
    var route = window.location.hash ? window.location.hash : "/";

    return React.createElement("div", null, React.createElement(PrimaryNavigation, { route: route }), React.createElement(Home, null), React.createElement(Footer, null));
  }
});

React.render(React.createElement(Body, null), document.querySelector('#yield'));

$(document).on('ready', function () {
  heightRatio();
});
//# sourceMappingURL=App.js.map