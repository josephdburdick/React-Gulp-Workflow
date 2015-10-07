
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
  RouteHandler = Router.RouteHandler,
  LazyLoad = require('react-lazyload');

//App.components.MainContainer = require('./components/MainContainer.js');
App.views.Home = require('./views/Home.js');
App.views.About = require('./views/About.js');
App.views.Work = require('./views/Work.js');
App.views.Services = require('./views/Services.js');
App.views.Thoughts = require('./views/Thoughts.js');

const AppViews = React.createClass({
  render(){
    return(
      <div>
        <LazyLoad offset={100} once>
          <App.views.Home />
        </LazyLoad>
        <LazyLoad offset={100} once>
          <App.views.About />
        </LazyLoad>
        <LazyLoad offset={100} once>
          <App.views.Work />
        </LazyLoad>
        <LazyLoad offset={100} once>
          <App.views.Services />
        </LazyLoad>
        <LazyLoad offset={100} once>
          <App.views.Thoughts />
        </LazyLoad>
      </div>
    );
  }
});

React.render(<AppViews />, document.querySelector('#app'));
