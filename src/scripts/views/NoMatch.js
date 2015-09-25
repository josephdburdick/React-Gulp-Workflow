let
  React = require('react'),
  Block = require('../components/Block.js'),

  NoMatch = React.createClass({
    render(){
      return (
        <div>
          No Route found :(
        </div>
      );
    }
  });

module.exports = NoMatch;
