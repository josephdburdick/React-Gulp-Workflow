let
  React = require('react'),
  PropTypes = React.PropTypes,
  classNames = require('classnames'),

  Fill = React.createClass({
    getDefaultProps(){
      let classes = 'fill fill-parent fill-tint',
          tintColor = 'rgba(255,255,255,.25)',
          tintAmount = 0.85;
      return {
        tintColor: tintColor,
        tintAmount: tintAmount,
        classes: classes
      };
    },
    getInitialState(){
      return {
        classes: classNames(this.props.className, this.props.classes),
        styles: {
          backgroundColor: this.props.tintColor,
          opacity: this.props.tintAmount
        }
      };
    },
    componentWillMount(){

    },
    render: function() {
      return (
        <div className={this.props.classes} style={this.state.styles}>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = Fill;
