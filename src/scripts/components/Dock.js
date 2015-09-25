let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  // _stylesArray = [],

  Dock = React.createClass({
    getDefaultProps(){
      return {
        classes: 'position-absolute',
        position: 'bottom',
        styles: {
          zIndex: 50
        }
      };
    },
    getInitialState(){

      return {
        classes: classNames(this.props.className, this.props.classes),
        styles: {
          [this.props.position]: 0,
          left: 0,
          right: 0
        }
      };
    },
    componentWillMount(){
      // if (!!this.state.position){
      //   this.state.styles.bottom = 0;
      //   this.state.styles.left = 0;
      //   this.state.styles.right = 0;
      // } else {
      //   this.state.styles.bottom = 'auto';
      //   this.state.styles[this.state.styles.position] = 0;
      // }
    },
    render(){
      return (
        <div className={this.props.classes} style={this.state.styles}>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = Dock;
