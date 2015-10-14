let
  $ = require('jquery'),
  React = require('react'),
  Slider = require('react-slick'),
  WorkSlider = React.createClass({
    // getInitialState(){
    //   return {
    //       $self: $(this.getDOMNode()),
    //       $arrowContainer: $self.find('.slider-arrows--container')
    //   };
    // },
    componentDidMount(){
      $('[data-direction]').on('click', (e) => {
        e.preventDefault();
        let $this = $(e.currentTarget);
        let $carousel = $this.closest('.slick-slider--wrapper').find('.slick-slider');
        let slickDirection = $this.attr('data-direction');
        // debugger;
        // $carousel.slick(slickDirection);
      });
    },
    render(){
      let settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        // prevArrow: $('.slick-prev'),
        // nextArrow: $('.slick-next'),
        slidesToScroll: 1 //,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       infinite: false,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        //   // You can unslick at a given breakpoint now by adding:
        //   // settings: "unslick"
        //   // instead of a settings object
        // ]
      };
      return (
        <div className="slick-slider--wrapper col-xs-12">
          <div id="slider-arrows--container" className="pull-right">
            <PrevArrow />
            <NextArrow />
            {/*<button type="button" data-role="none" className="btn btn-large btn-success slick-prev" data-direction="slickPrev">PREVIOUS</button>*/}
            {/*<button type="button" data-role="none" className="btn btn-large btn-success slick-next" data-direction="slickNext">NEXT</button>*/}
          </div>
          <Slider {...settings}>
            {this.props.children}
          </Slider>
        </div>
      );
    }
  });

module.exports = WorkSlider;
