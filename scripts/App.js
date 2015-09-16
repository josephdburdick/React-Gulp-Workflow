/*global React:true*/
'use strict';

var testRequire = require('./components/test_module.jsx');
var React = require('react');
var Body = React.createClass({ displayName: "Body",
  componentWillMount: function componentWillMount() {},
  componentDidMount: function componentDidMount() {},
  componentWillReceiveProps: function componentWillReceiveProps() {},
  componentDidUpdate: function componentDidUpdate() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var route = window.location.hash;
    return React.createElement("div", null, testRequire(), "!", React.createElement("br", null), "the route hash is: ", route);
  }
});

React.render(React.createElement(Body, null), document.querySelector('#yield'));
//# sourceMappingURL=App.js.map