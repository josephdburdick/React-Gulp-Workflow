let $ = require('jquery'),
    React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    PrimaryNavigation = require('./PrimaryNavigation.js');

let MainContainer = React.createClass({
  mixins:[Router.State],
  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    let routesIndex = {
      "/" : 0,
      home: 0,
      work: 1,
      services: 2,
      about: 3,
      thoughts: 4,
      contact: 5
    };
    let currentRoutes = this.context.router.namedRoutes,
        activePath = this.context.router.getCurrentPath(),
        activeRouteIndex = routesIndex[activePath];
    debugger;
    //this.context.router.transitionTo(activeRouteName, ...);
    $(function($) {
      let $yield = $('#yield');
      window.onscroll = function() {
        let thisScrollTop = Math.round($(this).scrollTop()),
            thisInnerHeight = Math.round($(this).innerHeight());

        if(thisScrollTop + thisInnerHeight + 1 >= $yield.outerHeight()) {

        }
      };
    });
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 main">
            <RouteHandler/>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-sm-12 next-page text-center">
              Loading
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = MainContainer;
