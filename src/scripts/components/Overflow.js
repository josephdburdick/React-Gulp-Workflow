let
  React = require('react'),
  $ = require('jquery'),
  classNames = require('classnames'),
  // _stylesArray = [],

  Overflow = React.createClass({
    getDefaultProps(){
      return {
        target: 'Block',
        classes: 'carousel carousel-overflow',
        horizontalOffset: 0
      };
    },
    getInitialState(){
      return {
        classes: classNames(this.props.className, this.props.classes),
        styles: {
          width: this.props.width || 'auto'
        },
        horizontalOffset: this.props.horizontalOffset
      };
    },
    componentDidMount(){
      let $carousel = $(this.getDOMNode()),
          $carouselInner = $carousel.find('.carousel-inner'),
          $children = $carouselInner.find('.carousel-item'),
          initialWidth = 0,
          newWidth = 0,
          horizontalOffset = this.props.horizontalOffset;

      $carousel.before('<div class="carousel-overflow--outline"></div>');
      let $carouselOutline = $carousel.siblings('.carousel-overflow--outline');

      let getChildrenWidth = () => {
        newWidth = 0;
        // handle padding on desktop
        let newPadding = $(window).width() - $carouselOutline.outerWidth(true);
        $carouselInner.css({
          paddingLeft: (newPadding / 2) + horizontalOffset,
          paddingRight: (newPadding / 2) + horizontalOffset
        });
        $children.each((i, child) => {
          newWidth += $(child).outerWidth(true);
        });
        // newWidth += parseInt($carouselInner.css('paddingLeft'));
        // newWidth += parseInt($carouselInner.css('paddingRight'));
        return newWidth;
      };
      initialWidth = getChildrenWidth($children);
      $carouselInner.width(initialWidth);


      $(window).on('resize', () => {
        newWidth = getChildrenWidth();

        if ($carouselOutline.css('padding-top') || $carouselOutline.css('padding')){
          let padding = $carouselOutline.css('padding-top');
          $carousel.css({ marginTop: padding, marginBottom: padding });
          // $carouselOutline.height = $carouselInner.outerHeight(true) + (parseInt(padding) * 2);
          $carouselOutline.css('height', $carouselInner.outerHeight(true) + (parseInt(padding) * 2));
        } else {
          // $carouselOutline.height = $carouselInner.outerHeight(true);
          $carouselOutline.css('height', $carouselInner.outerHeight(true));
        }
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
