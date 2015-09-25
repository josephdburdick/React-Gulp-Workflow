let $ = require('jquery'),
    React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    PrimaryNavigation = require('./PrimaryNavigation.js');

let MainContainer = React.createClass({
  componentDidMount(){
    let bodyContent = React.findDOMNode(this);
    $(window).on('scroll', (e) => {
      console.log(e);
    });
  },
  mixins:[Router.State],
  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    return (
      <div>
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
