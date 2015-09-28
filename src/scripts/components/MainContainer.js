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
      "" : 0,
      home: 0,
      work: 1,
      services: 2,
      about: 3,
      thoughts: 4,
      contact: 5
    };
    let currentRoutes = this.context.router.namedRoutes,
        activePath = this.context.router.getCurrentPath().split('/')[1],
        activeRouteIndex = routesIndex[activePath];

    $(function($) {
      let $yield = $('#yield');
      window.onscroll = function() {
        let thisScrollTop = Math.round($(this).scrollTop()),
            thisInnerHeight = Math.round($(this).innerHeight());

        if(thisScrollTop + thisInnerHeight + 1 >= $yield.outerHeight()) {
          console.log("Reached end of page.");
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
                <a href="#/contact" className="btn-white btn-outline btn-lg">Get in touch</a>
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
