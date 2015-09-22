let
  React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  Link = Router.Link;

const styles = {};

let PrimaryNavigation = React.createClass({
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">Adoptive {this.props.route}</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/#/work">Work</a></li>
              <li><a href="/#/services">Services</a></li>
              <li><a href="/#/about">About Us</a></li>
              <li><a href="/#/thoughts">Thoughts</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Search</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

  module.exports = PrimaryNavigation;
