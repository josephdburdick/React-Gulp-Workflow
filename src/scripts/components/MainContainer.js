let $ = require('jquery'),
_ = require('underscore'),
React = require('react'),
Router = require('react-router'),
RouteHandler = Router.RouteHandler,
PrimaryNavigation = require('./PrimaryNavigation.js');

let MainContainer = React.createClass({
  mixins:[Router.State],
  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    let routerInstance = this.context.router,
    availableRouteNames = _.allKeys(this.context.router.namedRoutes);

    let availableRoutesWithValue = _.map(availableRouteNames, function(routeName, index) {
      return {name: routeName, index: index};
    });

    // or change map to each and filter during previous step
    availableRoutesWithValue = _.reject(availableRoutesWithValue, function(routeName) {
      return routeName === "not-found";
    });

    let maxIndex = availableRoutesWithValue.length -1;

    $(function($) {
      let $yield = $('#yield');
      window.onscroll = function() {
        let thisScrollTop = Math.round($(this).scrollTop()),
        thisInnerHeight = Math.round($(this).innerHeight());

        if(thisScrollTop + thisInnerHeight + 1 >= $yield.outerHeight()) {
          console.log("Reached end of page.");

          let activeRoute = routerInstance.getCurrentPath().split('/')[1];
          if (activeRoute === "") {
            // change to synonym : home <=> root/empty string
            activeRoute = "home";
          }

          let activeRouteIndex = _.filter(availableRoutesWithValue, function(availableRoute) {
            return availableRoute.name === activeRoute; });
          // console.log("Current Route is " + activeRouteIndex[0].name);

          let nextRouteName = _.filter(availableRoutesWithValue, function (availableRoute) {
            if (activeRouteIndex[0].index === maxIndex)
            {
              return availableRoute.index === 0;
            }
            else
            {
              return availableRoute.index === activeRouteIndex[0].index + 1;
            }
          });
          routerInstance.transitionTo('/' + nextRouteName[0].name);
        }
      };
    });
return (
  <div>
  <div className="main">
  <RouteHandler/>
  </div>
  <footer className="footer-main">
  <div className="container">
  <div className="row">
  <div className="footer-content text-center col-xs-11 col-sm-5 col-centered">
  <div className="footer-heading">
  <p>
  We invest deeply in the work we do,
  adopting our clients' challenges as our own – 
  when they succeed, so do we.
  </p>
  </div>
  </div>
  <div className="footer-content text-center col-xs-11 col-sm-5 col-centered">
  <a href="#/contact" className="btn-white btn-outline btn-lg btn-cta">Get in touch</a>
  </div>
  </div>
  <div className="row">
  <div className="col-xs-6 text-left">
  <a href="#">Careers</a>
  <a href="#">Privacy / Legal</a>
  </div>
  <div className="col-xs-6 text-right">
  &copy; Adoptive 2015
  </div>
  </div>
  </div>
  </footer>
  <div className="container">
  <div className="col-sm-12 next-page text-center">
  Loading
  </div>
  </div>
  </div>
  );
}

});

module.exports = MainContainer;
