let
  React = require('react'),
  $ = require('jquery'),
  ProportionalBlock = React.createClass({
    componentDidMount(){
      let element = this.getDOMNode();
      $(window).on('resize', () => {
        $(element).each(function(){
          let ratio = $(this).data('heightratio');
          $(this).css({'min-height': Math.round($(this).outerWidth() * ratio )});
        });
      }).trigger('resize');
    },
    render(){
      let ratio = 0.55;
      return (
        <div className="card card-base case-study vertical-center" data-heightratio={ratio}>
          {this.props.children}
        </div>
      );
    }
  });

module.exports = ProportionalBlock;
