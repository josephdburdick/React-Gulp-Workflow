let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  // _stylesArray = [],

  Overflow = React.createClass({
    getDefaultProps(){
      return {
        target: 'Block',
        classes: 'carousel carousel-overflow'
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
    componentDidMount(){
      let carousel = $(this.getDOMNode()),
          carouselInner = carousel.find('.carousel-inner'),
          children = carouselInner.find('.carousel-item'),
          initialWidth = 0,
          newWidth = 0;

      let getChildrenWidth = () => {
        newWidth = 0;
        children.each((i, child) => {
          newWidth += $(child).outerWidth(true);
        });
        return newWidth;
      };
      initialWidth = getChildrenWidth(children);
      $(carouselInner).width(initialWidth);


      $(window).on('resize', () => {
        newWidth = getChildrenWidth();
        console.log(newWidth);
        // if (newWidth !== initialWidth){
        //   $(carouselInner).width(newWidth);
        // }
      }).trigger('resize');
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
