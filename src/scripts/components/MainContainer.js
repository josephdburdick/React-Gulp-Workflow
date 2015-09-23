let React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    PrimaryNavigation = require('./PrimaryNavigation.js');

let MainContainer = React.createClass({

  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    return (
      <div>

        <PrimaryNavigation name="navbar"/>
        <div className="row">
          <div className="col-sm-12 main">
            <RouteHandler/>
          </div>
        </div>
    </div>
    );
  }

});

module.exports = MainContainer;
