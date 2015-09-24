let
  React = require('react'),
  $ = require('jquery'),
  PrimaryNavigation = require('../components/PrimaryNavigation'),
  Jumbotron = React.createClass({
    render(){
      return (
        <header>
          <div className="jumbotron">
            <PrimaryNavigation name="navbar"/>
            <div className="container">
              <div className="row">
                <div className="intro-text col-sm-6 text-left">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    }
  });

module.exports = Jumbotron;
