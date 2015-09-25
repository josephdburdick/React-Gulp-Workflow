let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  // _stylesArray = [],

  Overflow = React.createClass({
    getDefaultProps(){
      return {
        target: 'Block',
        classes: 'carousel'
        // position: 'bottom'
      };
    },
    getInitialState(){
      return {
        classes: classNames(this.props.className, this.props.classes),
        styles: {
          width: this.props.width || 'auto'
        }
      };
    },
    // componentWillMount(){
    //   if (!!this.state.styles.width){
    //     this.state.styles.width = 0;
    //   }
    // },
    componentDidMount(){
      // debugger;
      let element = this.getDOMNode();
      let childrenWidth = '1500px';
      $(element).width(childrenWidth);
    },
    render(){
      return (
        <div className={this.props.classes} style={this.state.styles}>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = Overflow;
