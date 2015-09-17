
/*global React:false*/
/*global App:false*/


let App = {};
App.config = require('./config.jsx')();
App.libraries = {};
App.libraries.React = require('react');
App.libraries.jQuery = require('jquery');
App.libraries.$ = App.libraries.jQuery;

App.helpers = {};
App.helpers.heightRatio = require('./helpers/heightRatio.jsx')(App);

App.components = {};

/** Main **/
let React = App.libraries.React;
let $ = App.libraries.$;

let heightRatio = App.helpers.heightRatio;

let testRequire = require('./components/test_module.jsx');
let Body = React.createClass({ displayName: "Body",
  componentWillMount(){ },
  componentDidMount(){ },
  componentWillReceiveProps(){ },
  componentDidUpdate(){ },
  componentWillUnmount(){ },
  render(){
    let route = !!window.location.hash ? window.location.hash : "/";
    return (
      <div>
        {testRequire()}!<br />
        the route hash is: {route}
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
