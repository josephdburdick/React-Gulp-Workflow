let
  $ = require('jquery'),
  React = require('react'),
  slick = require('slick-carousel'),
  classNames = require('classnames'),
  WorkSlider = React.createClass({
    getDefaultProps(){
      return {
        classes: 'slick',
        settings: {
          dots: true,
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          prevArrow: $('[data-direction="slickPrev"]'),
          nextArrow: $('[data-direction="slickNext"]'),
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
      };
    },
    getInitialState(){
      return {
        classes: classNames(this.props.className, this.props.classes),
        settings: $.extend(this.props.settings, this.settings)
      };
    },
    componentDidMount(){
      let $this = $(this.getDOMNode());
      let settings = this.props.settings;
      $this.slick(settings);
    },
    render(){
      return (
        <div className='slick'>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = WorkSlider;
