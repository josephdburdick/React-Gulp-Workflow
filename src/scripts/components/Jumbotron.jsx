let
  React = require('react'),
  $ = require('jquery'),
  Jumbotron = React.createClass({
    componentDidMount(){

    },
    render(){
      return (
        <header>
          <div className="jumbotron">
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
