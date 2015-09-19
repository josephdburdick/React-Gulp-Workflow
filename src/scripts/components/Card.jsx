module.exports = (App) => {
  let React = require('react');
  let heightRatio = App.helpers.heightRatio;
  let ratio = App.config.defaults.heightRatio;
  let Card = React.createClass({
    componentDidMount(){
      let self = this.getDOMNode();
      heightRatio(self);
    },
    render(){
      return (
        <div className="card card-base case-study vertical-center" data-heightratio={ratio}>
          {this.props.children}
        </div>
      );
    }
  });
  return Card;
};
