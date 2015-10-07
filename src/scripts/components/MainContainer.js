let $ = require('jquery'),
_ = require('underscore'),
React = require('react'),
Router = require('react-router'),
RouteHandler = Router.RouteHandler,
PrimaryNavigation = require('./PrimaryNavigation.js');

let MainContainer = React.createClass({
  mixins:[Router.State],
  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  componentDidMount(){
    let routerInstance = this.context.router,
        availableRouteNames = _.allKeys(this.context.router.namedRoutes),
        availableRoutesWithValue = [],
        activeRouteIndex = 0,
        nextRouteName = 'not-found';

    // ignore the not-found route ; not valid
    _.each(availableRouteNames, (routeNameValue, indexValue) =>
      {if(routeNameValue !== "not-found")
        availableRoutesWithValue.push({name: routeNameValue, index: indexValue});
      });

    let maxIndex = availableRoutesWithValue.length -1;

    if (maxIndex > -1)
    {
      let activeRoute = routerInstance.getCurrentPath().split('/')[1];
      if (activeRoute === "") {
        // change to synonym : home <=> root/empty string
        activeRoute = "home";
      }

      activeRouteIndex = _.filter(availableRoutesWithValue, availableRoute => availableRoute.name === activeRoute);

      let nextRouteObject = _.filter(availableRoutesWithValue, availableRoute => (activeRouteIndex[0].index === maxIndex?availableRoute.index === 0:availableRoute.index === activeRouteIndex[0].index + 1));

      if (nextRouteObject.length > 0)
      {
        nextRouteName = nextRouteObject[0].name;
      }
    }
    $(function($) {
      let $appContainer = $('#app');
      // window.scrollTo(0, 0);
      window.onscroll = function() {
        let thisScrollTop = Math.round($(this).scrollTop()),
            thisInnerHeight = Math.round($(this).innerHeight()),
            containeR = window,
            containeD = document, //$('#footer-main'),
            scrollPercent = 1 * $(containeR).scrollTop() / ($(containeD).height() - $(containeR).height());

            console.log(scrollPercent);
        if($appContainer.height() && thisScrollTop + thisInnerHeight + 1 >= $appContainer.outerHeight()) {
          // console.log("Reached end of page.");
          routerInstance.transitionTo('/' + nextRouteName);
        }
      };
    });
  },
  render() {
return (
  <div>
    <div className="main">
      <RouteHandler/>
    </div>
    <footer className="footer-main" id="footer-main">
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
