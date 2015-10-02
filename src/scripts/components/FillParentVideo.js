let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  DriveIn = require('react-drive-in'),

  FillParentVideo = React.createClass({
    getDefaultProps(){

    },
    getInitialState(){

    },
    componentWillMount(){

    },
    componentDidMount(){

    },
    render(){
      return (
        <DriveIn
        show="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
        poster="http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg"
        />
      );
    }
  });

module.exports = FillParentVideo;
