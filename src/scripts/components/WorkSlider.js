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
      let $slider = $(this.getDOMNode()).find('.slick');
      let settings = this.props.settings;
      $slider.slick(settings);

      $('[data-direction]').on('click', (e) => {
        e.preventDefault();
        let direction = $(e.currentTarget).data('direction');
        $slider.slick(direction);
      });
    },
    render(){
      return (
        <div className="slick-slider--wrapper">
          <div className="row hidden-sm hidden-xs">
            <div className="col-sm-12">
              <div className="slick-slider--arrows-container text-right">
                <a href="#" data-direction="slickPrev"><i className="fa fa-chevron-circle-left fa-4x"></i></a>
                <a href="#" data-direction="slickNext"><i className="fa fa-chevron-circle-right fa-4x"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="slick">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

module.exports = WorkSlider;
