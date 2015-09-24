let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  // _stylesArray = [],

  Block = React.createClass({
    getDefaultProps(){
      let classes = 'card card-base vertical-center';
      return {
        ratio: 0.55,
        classes: 'card card-base vertical-center'
      };
    },
    getInitialState(){
      return {
        classes: classNames(this.props.className, this.props.classes),
        styles: {
          backgroundColor: this.props.backgroundColor || false,
          backgroundImage: this.props.backgroundImage ? `url(${this.props.backgroundImage})` : false,
          backgroundSize: this.props.backgroundSize || false
        }
      };
    },
    componentWillMount(){
      if (!!this.state.styles.backgroundColor || !!this.state.styles.backgroundImage){
        this.state.styles.position = 'relative';
        this.state.styles.borderWidth = 0;
      }
    },
    componentDidMount(){
      let element = React.findDOMNode(this),
          ratio = this.props.ratio;

      $(window).on('resize', () => {
        $(element).each(function(){
          $(this).css({minHeight: Math.round($(this).outerWidth() * ratio )});
        });
      }).trigger('resize');
    },
    render(){

      return (
        <div className={this.props.classes} ratio={this.props.ratio} style={this.state.styles}>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = Block;
