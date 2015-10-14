let
  React = require('react'),
  Slider = require('react-slick'),
  WorkSlider = React.createClass({
    render(){
      let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          {this.props.children}
        </Slider>
      );
    }
  });

module.exports = WorkSlider;
