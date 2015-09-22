var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    PrimaryNavigation = require('./PrimaryNavigation.jsx');

var MainContainer = React.createClass({

  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    return (
      <div>

        <PrimaryNavigation name="navbar"/>
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-8 main">
            <RouteHandler/>
          </div>
          <div className="col-12 col-sm-4 col-lg-4 sidebar">
            SUPPPP
          </div>
        </div>
    </div>
    );
  }

});

module.exports = MainContainer;
