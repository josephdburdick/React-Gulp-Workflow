let
  React = require('react'),
  ReactSwipe = require('react-swipe'),
  WorkSlider = React.createClass({
    render(){
      return (
        <ReactSwipe continuous={false}>
          {this.props.children}
        </ReactSwipe>
      );
    }
  });

module.exports = WorkSlider;
