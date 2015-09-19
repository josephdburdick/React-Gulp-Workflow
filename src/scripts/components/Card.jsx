module.exports = (App) => {
  let React = require('react');
  let heightRatio = App.helpers.heightRatio;
  let Card = React.createClass({
    componentDidMount(){
      let self = this.getDOMNode();
      heightRatio(App, self);
    },
    render(){
      return (
        <div className="card card-base case-study vertical-center" data-heightratio>
          {this.props.children}
        </div>
      );
    }
  });
  return Card;
};
